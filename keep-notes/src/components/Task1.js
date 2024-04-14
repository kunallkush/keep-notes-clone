import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Task1 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Onboarding Call",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 2,
      name: "Google Search Console Access",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 3,
      name: "Google Analytics Access",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 4,
      name: "Website Access",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 5,
      name: "Technical Audit",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 6,
      name: "Anchor Text and Semantic Analysis",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 7,
      name: "Competitor Analysis",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 8,
      name: "Anchor Text / URL Mapping",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 9,
      name: "Google Data Studio Report + Local Reporting Suite",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 10,
      name: "Site Level Optimization",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 11,
      name: "On Page Optimization",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 12,
      name: "Content Creation",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 13,
      name: "Content Publishing",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 14,
      name: "Premium Press Release",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 15,
      name: "Authority Niche Placements",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 16,
      name: "Review Management",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 17,
      name: "Index Links",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
    {
      id: 18,
      name: "Video Recap",
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
    },
  ]);
  const onChangeInput = (e, id, cellName) => {
    const { value } = e.target;
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [cellName]: value } : item
      )
    );
  };
  //   console.log(data);
  const [editCell, setEditCell] = useState(null);
  const handleKeyDown = (e, id, cellName) => {
    if (e.key === "Enter") {
      const { value } = e.target;
      setEditCell(null); // Hide the input field after editing
      //   console.log(`id: ${id}, CellName: ${cellName}, UpdatedValue: ${value}`);
      //   const requestOptions = {
      //     method: "Post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ [cellName]: value }),
      //   };

      //   onChangeInput(e, id, cellName);

      //   axios(`your-api-url/${id}`, requestOptions)
      //     .then((response) => {
      //       if (!response.ok) {
      //         throw new Error("Failed to update data");
      //       }
      //     })
      //     .catch((error) => {
      //       console.error("Error updating data:", error);
      //     });
    }
  };

  const handleDoubleClick = (id) => {
    setEditCell(id);
  };

  return (
    <div className="mx-auto mt-3">
      <Table bordered className="">
        <thead>
          <tr>
            <th
              className="text-center fs-5"
              style={{
                color: "gray",
                fontFamily: "sans-serif",
                borderRight: "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              MONTH 1
            </th>
            <th style={{ border: "none", backgroundColor: "#f9f9f9" }}></th>
            <th style={{ border: "none", backgroundColor: "#f9f9f9" }}></th>
            <th style={{ border: "none", backgroundColor: "#f9f9f9" }}></th>
            <th style={{ border: "none", backgroundColor: "#f9f9f9" }}></th>
            <th style={{ border: "none", backgroundColor: "#f9f9f9" }}></th>
            <th style={{ border: "none", backgroundColor: "#f9f9f9" }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ id, name, cell_1, cell_2, cell_3, cell_4, cell_5, cell_6 }) => (
              <tr key={id}>
                <td
                  className=""
                  style={{
                    width: "430px",
                    textAlign: "center",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <strong
                    className="fs-6"
                    style={{ fontFamily: "sans-serif", color: "gray" }}
                  >
                    {name}
                  </strong>
                </td>
                <td
                  className="mx-auto"
                  onDoubleClick={() => handleDoubleClick(id)}
                >
                  {editCell === id ? (
                    <input
                      className="form-control"
                      name="cell_1"
                      value={cell_1}
                      type="text"
                      onChange={(e) => onChangeInput(e, id, "cell_1")}
                      onKeyDown={(e) => handleKeyDown(e, id, "cell_1")}
                      placeholder="Type Name"
                    />
                  ) : (
                    cell_1
                  )}
                </td>
                <td onDoubleClick={() => handleDoubleClick(id)}>
                  {editCell === id ? (
                    <input
                      className="form-control"
                      name="cell_2"
                      value={cell_2}
                      type="text"
                      onChange={(e) => onChangeInput(e, id, "cell_2")}
                      onKeyDown={(e) => handleKeyDown(e, id, "cell_2")}
                      placeholder="Type Name"
                    />
                  ) : (
                    cell_2
                  )}
                </td>
                <td onDoubleClick={() => handleDoubleClick(id)}>
                  {editCell === id ? (
                    <input
                      className="form-control"
                      name="cell_3"
                      value={cell_3}
                      type="text"
                      onChange={(e) => onChangeInput(e, id, "cell_3")}
                      onKeyDown={(e) => handleKeyDown(e, id, "cell_3")}
                      placeholder="Type Name"
                    />
                  ) : (
                    cell_3
                  )}
                </td>
                <td onDoubleClick={() => handleDoubleClick(id)}>
                  {editCell === id ? (
                    <input
                      className="form-control"
                      name="cell_4"
                      value={cell_4}
                      type="text"
                      onChange={(e) => onChangeInput(e, id, "cell_4")}
                      onKeyDown={(e) => handleKeyDown(e, id, "cell_4")}
                      placeholder="Type Name"
                    />
                  ) : (
                    cell_4
                  )}
                </td>
                <td onDoubleClick={() => handleDoubleClick(id)}>
                  {editCell === id ? (
                    <input
                      className="form-control"
                      name="cell_5"
                      value={cell_5}
                      type="text"
                      onChange={(e) => onChangeInput(e, id, "cell_5")}
                      onKeyDown={(e) => handleKeyDown(e, id, "cell_5")}
                      placeholder="Type Name"
                    />
                  ) : (
                    cell_5
                  )}
                </td>
                <td onDoubleClick={() => handleDoubleClick(id)}>
                  {editCell === id ? (
                    <input
                      className="form-control"
                      name="cell_6"
                      value={cell_6}
                      type="text"
                      onChange={(e) => onChangeInput(e, id, "cell_6")}
                      onKeyDown={(e) => handleKeyDown(e, id, "cell_6")}
                      placeholder="Type Name"
                    />
                  ) : (
                    cell_6
                  )}
                </td>
                {/* <td>
                <input
                  name="cell_1"
                  value={cell_1}
                  type="text"
                  onChange={(e) => onChangeInput(e, id, "cell_1")}
                  onKeyDown={(e) => handleKeyDown(e, id, "cell_1")}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="cell_2"
                  value={cell_2}
                  type="text"
                  onChange={(e) => onChangeInput(e, id, "cell_2")}
                  onKeyDown={(e) => handleKeyDown(e, id, "cell_2")}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="cell_3"
                  value={cell_3}
                  type="text"
                  onChange={(e) => onChangeInput(e, id, "cell_3")}
                  onKeyDown={(e) => handleKeyDown(e, id, "cell_3")}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="cell_4"
                  value={cell_4}
                  type="text"
                  onChange={(e) => onChangeInput(e, id, "cell_4")}
                  onKeyDown={(e) => handleKeyDown(e, id, "cell_4")}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="cell_5"
                  value={cell_5}
                  type="text"
                  onChange={(e) => onChangeInput(e, id, "cell_5")}
                  onKeyDown={(e) => handleKeyDown(e, id, "cell_5")}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="cell_6"
                  value={cell_6}
                  type="text"
                  onChange={(e) => onChangeInput(e, id, "cell_6")}
                  onKeyDown={(e) => handleKeyDown(e, id, "cell_6")}
                  placeholder="Type Name"
                />
              </td> */}
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Task1;
