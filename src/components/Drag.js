import { useState } from "react";
import { 
    Box, 
    Grid, 
    GridItem, 
    Text 
} from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Drag = () => {
  const [rankings, setRankings] = useState("");

  const data = [
    {
        id: 1,
        name: 'someone',
        rank: -1
    },
    {
        id: 1,
        name: 'someone',
        rank: -1
    },
    {
        id: 1,
        name: 'someone',
        rank: -1
    }
  ]
  

  return (
    <Box

    >
        <Flex
            className="
                
            "
        >

        </Flex>
    </Box>
    )

}


export default Drag