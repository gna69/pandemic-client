import { createSlice } from '@reduxjs/toolkit';

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const map = createSlice({
  name: 'map',
  initialState: {
    nodes: [
        { id: 1, label: "Node 1", color: "#e04141" },
        { id: 2, label: "Node 2", color: "#e09c41" },
        { id: 3, label: "Node 3", color: "#e0df41" },
        { id: 4, label: "Node 4", color: "#7be041" },
        { id: 5, label: "Node 5", color: "#41e0c9" }
    ],
    edges: [
        { from: 1, to: 2, id: uuidv4()},
        { from: 1, to: 3, id: uuidv4()},
        { from: 2, to: 4, id: uuidv4()},
        { from: 2, to: 5, id: uuidv4()}
      ]
  },
  reducers: {
    
  },
})

export default map.reducer;