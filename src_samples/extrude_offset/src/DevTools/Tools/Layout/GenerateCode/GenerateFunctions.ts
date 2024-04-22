import { Canvas, Layer } from "../../../types";

//sampleLayers to sampleResult 형태로 변환하는 함수
const toStringJSXElement = (layers: Layer[]): string => {
  if (layers.length === 0) return "layers are empty";

  const generatePropsCode = (props: { [key: string]: any }) => {
    const propStrings = Object.keys(props).map((key) => {
      if (key === "children") return "";
      const value = props[key];
			let keyValue = '';
      if (typeof value === "object") {
        keyValue = `${key}: ${JSON.stringify(value)}`;
      } else {
				keyValue = `${key}: ${typeof value === "string" ? `'${value}'` : value}`;
			}

			return keyValue + ',';
    });

    return propStrings.join('');
  };

  const generateComponentCode = (layer: Layer, depth: number = 3): string => {
    const propsCode = generatePropsCode(layer.props);
    const childrenCode: string | undefined =
      layer.children && layer.children.length > 0
        ? `${layer.children
            .map((child) => generateComponentCode(child, depth + 1))
            .join("")}`
        : undefined;

    // 각 자식 요소를 생성할 때 depth에 따라 탭을 추가합니다.
    const tabs = "\t".repeat(depth);
    if (layer.props.children) {
      //children을 props에 들고 있다는 건 그 이하 자식 요소가 없다는 것을 의미한다.
      return `${tabs}<Moaui.${layer.type} {...{${propsCode}}}>${layer.props.children}</Moaui.${layer.type}>\n`;
    } else {
      return `${tabs}<Moaui.${layer.type} {...{${propsCode}}}>\n${
        childrenCode ?? ""
      }${tabs}</Moaui.${layer.type}>\n`;
    }
  };

  const result = layers.map((layer) => generateComponentCode(layer)).join("");
  //마지막 줄의 '\n'을 제거한다.
  return result.slice(0, -1);
};

//Exports/Codes에 추출한다.
//App.tsx를 백업한다. App-240213-180318.tsx
//App.tsx를 덮어 씌운다.
const toStringFunctionalComponent = (
  canvas: Canvas,
  layers: Layer[]
): string => {
  return `/**
 * Generated by Moaui DevTools
 * Created at ${new Date().toLocaleString()}
 */

import React from 'react';
import Moaui from '@midasit-dev/moaui';

const App = () => {
	return (
		<Moaui.Panel variant='box' relative width={${canvas.width}} height={${canvas.height}}>
${toStringJSXElement(layers)}
		</Moaui.Panel>
	);
}

export default App;`;
};

export { toStringFunctionalComponent, toStringJSXElement };

/*
const sampleLayers = [
	{
		"id": "1-FloatingBox-1341df08-a0a86151",
		"type": "FloatingBox",
		"props": {
			"x": 0,
			"y": 0,
			"width": 160,
			"height": 48,
			"guideBoxProps": {
				"width": "inherit",
				"height": "inherit",
				"center": true
			}
		},
		"children": [
			{
				"id": "1-Button-47e6dd50-a0a86151",
				"type": "Button",
				"props": {
					"children": "테스트버튼",
					"variant": "contained",
					"disabled": false,
					"width": "100px",
					"color": "normal",
					"loading": false
				},
				"children": []
			},
			{
				"id": "2-Button-47e6dd50-a0a86151",
				"type": "Button",
				"props": {
					"children": "테스트버튼",
					"variant": "contained",
					"disabled": false,
					"width": "100px",
					"color": "normal",
					"loading": false
				},
				"children": []
			}
		],
		"parent": null
	},
];

const sampleResult = `<Moaui.FloatingBox {...{x: 0,y: 0,width: 160,height: 48,guideBoxProps: {"width":"inherit","height":"inherit","center":true}}}>
	<Moaui.Button {...{children: '테스트버튼',variant: 'contained',disabled: false,width: '100px',color: 'normal',loading: false}}>
	</Moaui.Button>
	<Moaui.Button {...{children: '테스트버튼',variant: 'contained',disabled: false,width: '100px',color: 'normal',loading: false}}>
	</Moaui.Button>
</Moaui.FloatingBox>`
*/
