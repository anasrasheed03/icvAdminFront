import React, { useState } from 'react';
import { RichTextEditor, Breadcrumb } from "matx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
    Button,
    Icon,
} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function EditViewPageSection(props) {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const [content, setContent] = useState(`<div class="row"><div class="col-md-4 col-sm-12"><div class="box-icon-2"><div class="body-content"><div class="heading">Diversity </div><span>“Different colors are what makes up a beautiful rainbow” 
    In a similar fashion we bring in the pool of highly efficient people from different backgrounds and cultures for them to collectively enlighten up a sparkling future.
    </span></div></div></div><div class="col-md-4 col-sm-12"><div class="box-icon-2"><div class="body-content"><div class="heading">Innovation</div>“There is always a way to make things better”
    We stay on a road where we constantly innovate our operations as well as our products. For there will always be a superior method of improving the chemicals and their applications.
    </div></div></div><div class="col-md-4 col-sm-12"><div class="box-icon-2"><div class="body-content"><div class="heading">Sustainability </div>“What shall come tomorrow, should begin today”
    Operations at ICV has been designed purely after careful consideration of environment that in any case we shall not pollute any land, not contaminate waters, not foul the air we breathe. Surely our baby steps will add up to big results.
    </div></div></div></div>`
    );
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const handleContentChange = contentHtml => {

        setContent(contentHtml);
    };
    const handleChangeTo = (e) => {
        setTo(e.target.value);
    }
    const handleSubmit = (e) => {
        
    }
    const handleChangeFrom = (e) => {
        setFrom(e.target.value);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "Edit Page Section" }
                    ]}
                />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Submit Form"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to want submit?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
          </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
            <ValidatorForm
                useRef="form"
                onSubmit={handleClickOpen}
                onError={errors => null}
            >
                    <TextValidator
                    className="mb-16 w-100"
                    label="Title"
                    type="text"
                    name="title"
                    value={from}
                    validators={["required", "isTitle"]}
                    errorMessages={["this field is required", "Title is not valid"]}
                />

                {/* <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">To</InputLabel>
                    <Select
                        native
                        value={to}
                        onChange={handleChangeTo}
                        inputProps={{
                            name: 'to',
                            id: 'age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value="abcd@gmail.com">abcd@gmail.com</option>
                        <option value="xyz@yahoo.com">xyz@yahoo.com</option>
                        <option value="pqrs@hotmail.com">pqrs@hotmail.com</option>
                    </Select>
                </FormControl> */}
                <TextValidator
                    className="mb-16 w-100"
                    label="Path"
                    onChange={handleChangeFrom}
                    type="text"
                    name="path"
                    value={from}
                    validators={["required", "isPath"]}
                    errorMessages={["this field is required", "path is not valid"]}
                />

                    <TextValidator
                    className="mb-16 w-100"
                    label="Meta Tags"
                    onChange={handleChangeFrom}
                    type="text"
                    name="metaTags"
                    value={from}
                    validators={["required", "isMetaTags"]}
                    errorMessages={["this field is required", "meta tag is not valid"]}
                />
                <RichTextEditor
                    content={content}
                    handleContentChange={handleContentChange}
                    placeholder="insert text here..."
                />
                <div>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>submit</Icon>
                        <span className="pl-8 capitalize">Send</span>
                    </Button>
                    <Button cvariant="contained" >
                        <span className="pl-8 capitalize">Cancel</span>
                    </Button>
                </div>
            </ValidatorForm>

        </div>
    )
}
export default EditViewPageSection;