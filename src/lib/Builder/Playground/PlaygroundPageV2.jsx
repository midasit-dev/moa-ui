import React from 'react';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout';
import { TemplateWidth, TemplateHeight, LayoutsInfo } from './recoil/PlaygroundAtom';
import { useRecoilState } from 'recoil';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ItemTypes } from './Components/ItemTypes';
import DraggedComponent from '@src/lib/Builder/Playground/Components/DraggedComponent';
import TotalCodeStringV2 from './Components/TotalStringV2';

const fontStyle = {
  fontFamily: "Prentendard",
  fontSize:"0.6875rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "1rem",
  color:"#000",
}

const DropTargetV2 = (props) => {
  const isopenCode = props.openCode;
  const [sizewidth, setSizewidth] = useRecoilState(TemplateWidth);
  const [sizeheight, setSizeHeight] = useRecoilState(TemplateHeight);
  const [layoutsInfo, setLayoutsInfo] = useRecoilState(LayoutsInfo);
  const [layouts, setLayouts] = React.useState([{i: new Date().getTime().toString(), x: 0, y: 20, w: 1, h: 1, minW: 1, maxH: 1, type: ItemTypes.GuideBoxEmpty}]); 


  React.useEffect(() => {
    function setRecoilLayoutsInfo(layouts){
      const layoutsInfo = layouts.map((item) => {
        const { i, x, y, w, h, type } = item;
        return { i, x, y, w, h, type };
      });
      setLayoutsInfo(layoutsInfo);
    }
    setRecoilLayoutsInfo(layouts);
  }, [layouts]);

  function onClickClear(){
    setLayouts([{i: new Date().getTime().toString(), x: 0, y: 20, w: 3, h: 1, minW: 1, maxH: 1, type: ItemTypes.GuideBoxEmpty}]);
  };
  
  function onClickBack(){
    setSizeHeight("");
    setSizewidth("");
  }

  // 드롭 이벤트 핸들러
  const onDrop = (layout, layoutItem, _event) => {
    // layout은 드롭 이후의 전체 레이아웃 배열입니다.
    // layoutItem에는 드롭된 아이템의 레이아웃 정보가 포함됩니다.
    // event는 드롭 이벤트 객체입니다.
    // console.log('Dropped layout:', layout);
    // console.log('Dropped element props:', layoutItem);
    // console.log('Event:', _event);
    // 레이아웃을 업데이트 하는 로직을 구현합니다.
    // 예: 새 아이템을 레이아웃에 추가합니다.
    const componentType = _event.dataTransfer.getData("type");
    const newItemId = new Date().getTime().toString();
    let newItem = {};
    if(componentType === ItemTypes.ButtonContained){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        maxH: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ButtonNegative){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 4, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        maxH: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ButtonNormal){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 4, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        maxH: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ButtonOutlined){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        maxH: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ButtonText){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        maxH: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ButtonWidth){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        maxH: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ChartLineAxisLegend){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 5, // 여기서는 가로 2개 단위로 가정
        h: 10, // 여기서는 세로 1개 단위로 가정
        minH: 10,
        minW: 5,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ChartLineAxisPointSize){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 5, // 여기서는 가로 2개 단위로 가정
        h: 10, // 여기서는 세로 1개 단위로 가정
        minH: 10,
        minW: 5,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.ChartLineAxisTopRight){
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 8, // 여기서는 가로 2개 단위로 가정
        h: 10, // 여기서는 세로 1개 단위로 가정
        minH: 10,
        minW: 8,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.CheckNotRequired){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 4,
        h: 1,
        maxH: 1,
        minW: 3,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.CheckRequired){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 4,
        h: 1,
        maxH: 1,
        minW: 3,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.CheckGroupStateful){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3,
        h: 3,
        minW: 2,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.CheckGroupUnControlled){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3,
        h: 4,
        minW: 2,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.TendonProfileConverterBottomButtons){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 7,
        h: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.TendonProfileConverterUpdateButton){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 7,
        h: 1,
        type: componentType
      };
    }
    else if(componentType === ItemTypes.TendonProfileConverterList){
      newItem = {
        i: newItemId,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 7,
        h: 12,
        type: componentType
      };
    }
    else {
      newItem = {
        i: newItemId, // 혹은 다른 고유한 ID 생성 로직
        x: layoutItem.x,
        y: layoutItem.y,
        w: 3, // 여기서는 가로 2개 단위로 가정
        h: 1, // 여기서는 세로 1개 단위로 가정
        type: componentType
        // 필요한 경우 추가적인 속성 설정
      };
    }
    // 레이아웃 상태 업데이트
    setLayouts(currentLayout => [...currentLayout, newItem]);
  };

  // onLayoutChange 이벤트 핸들러
  const onLayoutChange = (currentLayout) => {
    setLayouts(prevLayouts => {
      return prevLayouts.map(layoutItem => {
        // 현재 레이아웃에서 같은 아이디를 가진 아이템을 찾습니다.
        const layoutChangeItem = currentLayout.find(item => item.i === layoutItem.i);
    
        // 찾은 아이템이 있다면 layoutItem의 값들을 업데이트합니다.
        if (layoutChangeItem) {
          // Object.keys를 사용해서 모든 키를 순회하며,
          // 변경된 레이아웃 아이템의 속성 값이 있다면 현재 항목의 값을 업데이트합니다.
          Object.keys(layoutItem).forEach(key => {
            if (layoutChangeItem.hasOwnProperty(key)) {
              layoutItem[key] = layoutChangeItem[key];
            }
          });
          return layoutItem; // 업데이트된 layoutItem 반환
        } else {
          // 아이디가 일치하는 아이템을 찾지 못했을 경우 기존의 layoutItem을 그대로 반환합니다.
          return layoutItem;
        }
      });
    });
  };

  const onBreakpointChange = (breakpoint) => {
    console.log(breakpoint);
  };

  return (
    <>
     {
        isopenCode === false ? (
          <>
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ mb: "0.5rem" }}
            >
              <IconButton
                sx={{ float: "left", padding: "0.2rem", m: 0, ...fontStyle }}
                onClick={onClickBack}
              >
                <ArrowBackIcon />
                Back
              </IconButton>
              <Typography variant="subtitle2">
                {sizewidth} X {sizeheight}
              </Typography>
              <IconButton
                sx={{ padding: "0.2rem", m: 0, ...fontStyle }}
                onClick={onClickClear}
              >
                <RefreshIcon />
                Clear
              </IconButton>
            </Box>
            <Box
              sx={{
                width: `${sizewidth}px`,
                height: `${sizeheight}px`,
                border: "1px solid #bebebe",
                p: "0.5rem",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              {/* Grid Layout Components */}
              <GridLayout
                className="layout"
                layout={layouts}
                cols={12}
                rowHeight={30}
                width={Number(sizewidth)}
                isDroppable={true}
                onDrop={onDrop}
                onLayoutChange={onLayoutChange}
                measureBeforeMount={true}
                compactType={null}
                onBreakpointChange={onBreakpointChange}
                containerPadding={[5, 5]}
                margin={[0, 0]}
              >
                {layouts.map((item) => {
                  return (
                    <div
                      key={item.i}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DraggedComponent item={item} />
                    </div>
                  );
                })}
              </GridLayout>
            </Box>
          </>
        )
        :
        (
          <Box sx={{width:"800px", minHeight:"500px", maxHeight:"800px"}}>
            <TotalCodeStringV2 />
          </Box>
        )
      }
    </>
  );
}

export default DropTargetV2;