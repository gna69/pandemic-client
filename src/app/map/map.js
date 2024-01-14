import Graph from "react-graph-vis";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    }
};

function Map() {
  const nodes = useSelector((state) => state.mapper.nodes);
  const edges = useSelector((state) => state.mapper.edges);
    
  const [state, setState] = useState({
        counter: 5,
        graph: {
          nodes: nodes,
          edges: edges,
        },
        events: {
          select: ({ nodes, edges }) => {
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);
            alert("Selected node: " + nodes);
          },
        }
    });

    const { graph, events } = state;

    return (
        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
    );
}

export default Map;