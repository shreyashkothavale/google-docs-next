import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function CreateNewDoc() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-4xl  ">
      <div className="pt-5">
        <div className="flex   h-10 justify-between items-center">
          <div>
            <h1 className="font-sans text-black">Start a new document</h1>
          </div>
          <div>
            <IconButton size="small">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <img
            src="/doc.png"
            alt=""
            style={{ height: 180, borderRadius: 5 }}
            className="cursor-pointer border hover:border-blue-400"
            onClick={() => setOpen(true)}
          />
          <h2 className="p-2 font-semibold">Blank</h2>
        </div>

        <Modal
          open={open}
          className=" flex justify-center items-center"
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              width: 300,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              padding: 1,
              justifyContent: "center",
            }}
          >
            <div className="p-2">
              <h1 className="py-3 font-semibold">Create new doc</h1>
              <div className="rounded-md bg-gray-200 p-2 px-3">
                <input
                  style={{
                    background: "transparent",
                    width: "100%",
                    outline: "none",
                  }}
                />
              </div>
              <div className="flex justify-between p-2 mt-2">
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => alert("Create was clicked")}>
                  Create
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default CreateNewDoc;
