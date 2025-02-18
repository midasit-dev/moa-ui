import { styled } from "@mui/material/styles";
import MoaStyledComponent from "../../Style/MoaStyled";

// type definitions
type Value = number | string | Date;
interface Coordinate {
  x: Value;
  y: Value;
}
interface DataSerie {
  id: string | number;
  data: Coordinate[];
}

export type StyledProps = {
  /**
   * The Data of the ScatterPlot
   */
  data: DataSerie[];

  /**
   * Chart width
   *
   * @default 100%
   */
  width?: number | string;
  /**
   * Chart height
   *
   * @default 400
   */
  height?: number | string;

  /**
   * set a margin
   *
   * @default object { top: 60, right: 140, bottom: 70, left: 90 }
   */
  margin?: any;

  /**
   * set a xScale
   *
   * @default object { type: 'linear', min: 0, max: 'auto' }
   */
  xScale?: any;

  /**
   * set a xFormat
   */
  xFormat?: any;

  /**
   * set a yScale
   *
   * @default object { type: 'linear', min: 0, max: 'auto' }
   */
  yScale?: any;

  /**
   * set a yFormat
   */
  yFormat?: any;

  /**
   * set a axis top
   */
  axisTop?: any | null;
  /**
   * set a axis right
   */
  axisRight?: any | null;
  /**
   * set a axis left
   *
   * @default
   * {
   * 	tickSize: 5,
   * 	tickPadding: 5,
   * 	tickRotation: 0,
   * 	legend: "y",
   * 	legendPosition: "middle",
   * 	legendOffset: -60,
   * 	truncateTickAt: 0,
   * }
   */
  axisLeft?: any | null;
  /**
   * set a axis bottom
   *
   * @default
   * {
   * 	tickSize: 5,
   * 	tickPadding: 5,
   * 	tickRotation: 0,
   * 	legend: "x",
   * 	legendPosition: "middle",
   * 	legendOffset: 46,
   * 	truncateTickAt: 0,
   * }
   */
  axisBottom?: any | null;

  /**
   * set a legends
   *
   * @default undefined
   */
  legends?: any[];

  /**
   * set a legendsDefault
   *
   * @default
   * [
   * 	{
   * 		anchor: "bottom-right",
   * 		direction: "column",
   * 		justify: false,
   * 		translateX: 130,
   * 		translateY: 0,
   * 		itemWidth: 100,
   * 		itemHeight: 12,
   * 		itemsSpacing: 5,
   * 		itemDirection: "left-to-right",
   * 		symbolSize: 12,
   * 		symbolShape: "circle",
   * 		effects: [
   * 			{
   * 				on: "hover",
   * 				style: {
   * 					itemOpacity: 1,
   * 				},
   * 			},
   * 		],
   * 	},
   *]
   */
  legendsDefault?: boolean;

  /**
   * set a nodeSize
   */
  nodeSize?: number;
};

const StyledComponent = styled((props: StyledProps) => {
  const {
    data,
    width,
    height,
    margin,
    xScale,
    xFormat,
    yScale,
    yFormat,
    axisTop,
    axisRight,
    axisLeft,
    axisBottom,
    legends,
    legendsDefault,
    nodeSize,
  } = props;

  return (
    <div
      style={{
        width: width || 500,
        height: height || 500,
      }}
    >
      {/* <ResponsiveScatterPlot
        data={data}
        margin={margin ?? { top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={xScale ?? { type: "linear", min: 0, max: "auto" }}
        xFormat={xFormat ?? ">-.2f"}
        yScale={yScale ?? { type: "linear", min: 0, max: "auto" }}
        yFormat={yFormat ?? ">-.2f"}
        blendMode="multiply"
        axisTop={axisTop ?? null}
        axisRight={axisRight ?? null}
        axisLeft={
          axisLeft ?? {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "y",
            legendPosition: "middle",
            legendOffset: -60,
            truncateTickAt: 0,
          }
        }
        axisBottom={
          axisBottom ?? {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "x",
            legendPosition: "middle",
            legendOffset: 46,
            truncateTickAt: 0,
          }
        }
        legends={
          legends
            ? legends
            : legendsDefault
            ? [
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 130,
                  translateY: 0,
                  itemWidth: 100,
                  itemHeight: 12,
                  itemsSpacing: 5,
                  itemDirection: "left-to-right",
                  symbolSize: 12,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
        nodeSize={nodeSize ?? undefined}
      /> */}
    </div>
  );
})(() => ({}));

const ThemedComponent = (props: StyledProps) => (
  <MoaStyledComponent>
    <StyledComponent {...props} />
  </MoaStyledComponent>
);
export default ThemedComponent;
