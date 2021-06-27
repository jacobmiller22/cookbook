import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { postRecipes } from "apis";
import _ from "lodash";

import {
  List,
  ListItem,
  Grid,
  ButtonGroup,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { Recipes } from "./components";
import { Input } from "components/atoms";
import { Dialog } from "components/molecules";

const initialDialog = {
  open: false,
  title: null,
  actions: null,
  content: null,
};

const initialFileList: FormData = null;

const RecipeListView = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialog, setDialog] = useState(initialDialog);
  const [selectedFiles, setSelectedFiles] = useState(initialFileList);
  const classes = useStyles();
  const { handleSubmit, control, setValue } = useForm();

  const handleAddMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onSubmit = async (data) => {
    let formData = new FormData();
    const fileArray = Array.from(data);
    for (var key in fileArray) {
      formData.append(`formData`, fileArray[key]);
    }

    // _.forEach(data, (file, i) => {
    //   formData.append(`files`, file);
    // });
    console.log(formData);
    await postRecipes(formData);
  };

  const handleAdd = (e) => {
    const { value } = e.currentTarget.dataset;
    setAnchorEl(null);

    switch (value) {
      case "upload":
        // const onSelect = (e) => {
        //   // console.log(e.target.files);
        //   let formData = new FormData();
        //   _.forEach(e.target.files, (file, i) => {
        //     console.log(i);
        //     formData.append(`file_${i}`, file);
        //   });
        //   console.log(formData.get("file_0"));
        //   setSelectedFiles(formData);
        // };
        const actions = [
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Continue
          </Button>,
        ];
        const content = [
          {
            type: "jsx",
            content: (
              <form>
                <Controller
                  name="files"
                  control={control}
                  render={() => (
                    <Input
                      type="file"
                      name="recipe_img"
                      onChange={(e) =>
                        setValue(`files`, e.target.files, {
                          shouldValidate: true,
                        })
                      }
                      encType="multipart/form-data"
                    />
                  )}
                />
                {/* <button type="submit">Submit</button> */}
              </form>
            ),
          },
        ];
        setDialog({ open: true, title: "Upload a Recipe", actions, content });
        break;
      default:
        break;
    }
  };

  return (
    <Grid container>
      <Dialog
        open={dialog.open}
        title={dialog.title}
        actions={dialog.actions}
        content={dialog.content}
        maxWidth="lg"
        onBackdropClick={() => setDialog({ ...initialDialog })}
      />
      <Grid item xs={12}>
        <div className={classes.horizontal}>
          <div className={classes.flexGrow}></div>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleAddMenu}
          >
            Add
          </Button>
        </div>
        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleAdd}
        >
          <MenuItem onClick={handleAdd} component="label" data-value="upload">
            <ListItemIcon>
              <CloudUploadIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload" />
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs={12}>
        <Recipes recipes={["1", "", ""]} />
      </Grid>
    </Grid>
  );
};

export default RecipeListView;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    // flexDirection: "column",
    justifyContent: "center",
  },
  flexGrow: {
    flexGrow: 1,
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
  },
}));
