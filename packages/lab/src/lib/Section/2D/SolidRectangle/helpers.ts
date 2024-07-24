import { Dimension2D, Coord2D } from "@lablib/Section/2D/types/base";
import { SolidRectangleProps } from "@lablib/Section/2D/types/props";
import { defaultCanvasValue, defaultShapeValue, toCoord2D, ensureDimLine, reverseY, toDimension2D, drawDimLine } from "@lablib/Section/2D/utils";
import { P5CanvasInstance } from "@p5-wrapper/react";

// Properties를 추출한다.
export const calcPropsSolidRectangle = (props: SolidRectangleProps) => {
	const {
		b,
		h,
		canvas,
		shape,
		dimensionLine,
	} = props;

		// from canvas prop
		const _canvas = { ...defaultCanvasValue(b, h), ...canvas, };
		const canvasBackground: string | null = _canvas.background;
		const canvasWH: Dimension2D = toDimension2D(_canvas.dimension);
	
		// from shape prop
		const _shape = { ...defaultShapeValue(), ...shape, };
		const shapeSt: Coord2D = toCoord2D(_shape.startCoords);
		const shapeFill = _shape.fill;
		const shapeStroke = _shape.stroke;
		const shapeStrokeWeight = _shape.strokeWeight;
	
		// from dimension line prop
		const dimB = ensureDimLine(dimensionLine?.b);
		const dimH = ensureDimLine(dimensionLine?.h);
	
		/** Vertexes of a SolidRectangle
		 * lb: left bottom
		 * rb: right bottom
		 * rt: right top
		 * lt: left top
		 */
		const lb: Coord2D = { x: shapeSt.x, 		y: reverseY(shapeSt.y, canvasWH.height)};
		const rb: Coord2D = { x: shapeSt.x + b, y: reverseY(shapeSt.y, canvasWH.height)};
		const rt: Coord2D = { x: shapeSt.x + b, y: reverseY(shapeSt.y + h, canvasWH.height)};
		const lt: Coord2D = { x: shapeSt.x, 		y: reverseY(shapeSt.y + h, canvasWH.height)};
	
		/** Center of a SolidRectangle
		 * cb: center bottom
		 * cl: center left
		 */
		const cb = { x: shapeSt.x + b / 2, 	y: reverseY(shapeSt.y, canvasWH.height)};
		const cl = { x: shapeSt.x, 					y: reverseY(shapeSt.y + h / 2, canvasWH.height)};

		return {
			b, h,
			canvasBackground, canvasWH,
			shapeFill, shapeStroke, shapeStrokeWeight,
			dimB, dimH,
			lb, rb, rt, lt,
			cb, cl,
		}
}

// 단면을 스케치한다.
export const drawSolidRectangle = (p5: P5CanvasInstance, extractedProps: any) => {
	if (!p5 || !extractedProps) return;

	const {
		b, h,
		shapeFill, shapeStroke, shapeStrokeWeight,
		dimB, dimH,
		lb, rb, rt, lt,
		cb, cl,
	} = extractedProps;

	//도형의 기본 스타일을 설정
	p5.push();
	p5.beginShape();
	p5.fill(shapeFill);
	p5.stroke(shapeStroke);
	p5.strokeWeight(shapeStrokeWeight);
	p5.vertex(lb.x, lb.y);
	p5.vertex(rb.x, rb.y);
	p5.vertex(rt.x, rt.y);
	p5.vertex(lt.x, lt.y);
	p5.endShape(p5.CLOSE);
	p5.pop();

	// 치수선 설정 - Bottom -> Right -> Top -> Left
	drawDimLine(p5, 'bottom', dimB, lb, rb, cb, String(b));
	drawDimLine(p5, 'left', 	dimH, lt, lb, cl, String(h));
}
