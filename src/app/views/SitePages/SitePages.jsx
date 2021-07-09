import React, { useState } from 'react';
import { RichTextEditor, Breadcrumb } from "matx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid
} from "@material-ui/core";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

function SitePages(props) {
    const useStyles = makeStyles({
        avatar: {
          backgroundColor: blue[100],
          color: blue[600]
        }
      });
    const classes = useStyles();
  const { onClose, selectedValue, ...other } = props;
  const emails = ["username@gmail.com", "user02@gmail.com"];
  const [showModal, setShowModal] = useState(false);
  const [modalTile, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');
  const history = useHistory();
  
  const getExport = (contactData) => {
    function handleListItemClick(value) {
        let path = `editPageSectiion`; 
        history.push(path);
      }

    const logsView = () => {
      return (
        <List>
        {contactData.sections.map(section => (
          <ListItem
            button
            onClick={() => handleListItemClick(section)}
            key={section}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={section} />
          </ListItem>
        ))}

        {/* <ListItem button onClick={() => handleListItemClick("addAccount")}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem> */}
      </List>
      )
    }
    setModalTitle('Contact Report');
    setModalBody(logsView);
    setShowModal(true);
  }
  const contactList = [
    {
      pageName: "Home",
      path: "/",
      title: "ICV - Home - For A Chemovative Tomorrow",
      sections:['Banner','Motives','About us','Business Segment']
    },
    {
        pageName: "Discover US",
        path: "/ourcore",
        title: "ICV - Discover US",
        sections:['Banner','Motives','About us','Business Segment']
     },
    { 
        pageName: "Business Segments",
        path: "/businesssegment/",
        title: "ICV - Business Segments",
        sections:['Banner','Motives','About us','Business Segment']

    },
    {
        pageName: "Products",
        path: "/products/",
        title: "ICV - Products",
        sections:['Banner','Motives','About us','Business Segment']

    },
    {
        pageName: "Insights",
        path: "/blogs/",
        title: "ICV - Insights",
        sections:['Banner','Motives','About us','Business Segment']

    },
    {
        pageName: "Contact Us",
        path: "/contact/",
        title: "ICV - Contact US",
        sections:['Banner','Motives','About us','Business Segment']
        
    }
  ];


  return (
    <div>
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalTile}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowModal(false)} color="primary">
            Close
  </Button>

        </DialogActions>
      </Dialog>
      <Card elevation={3} className="pt-20 mb-24">
        <div className="card-title px-24 mb-12">Website Pages List</div>
        <div className="overflow-auto">
          <Table className="product-table">
            <TableHead>
              <TableRow>
                <TableCell className="px-24" colSpan={4}>
                  Page Name
                </TableCell>
                <TableCell className="px-0" colSpan={2}> 
                  Path
                </TableCell>
                <TableCell className="px-0" colSpan={2}>
                  Title
                </TableCell>
                {/* <TableCell className="px-0" colSpan={2}>
                  Phone
                </TableCell> */}
                {/* <TableCell className="px-0" colSpan={2}>
                  Message
                </TableCell> */}
                <TableCell className="px-0" colSpan={1}>
                  Action 
                </TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {contactList.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize" colSpan={4} align="left">
                    <div className="flex flex-middle">

                      <p className="m-0 ml-8">{product.pageName}</p>
                    </div>
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                    {product.path}
                  </TableCell>

                  <TableCell className="px-0" align="left" colSpan={2}>
                    {product.title}
                  </TableCell>
                  {/* <TableCell className="px-0" align="left" colSpan={2}>
                    {product.phone}
                  </TableCell> */}
                  {/* <TableCell className="px-0" align="left" colSpan={2}>
                    {product.message}
                  </TableCell> */}
                  <TableCell className="px-0" colSpan={1}>
                    <IconButton onClick={() => getExport(product)}>
                      <Icon color="primary">visibility</Icon>
                    </IconButton >
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );

}
export default SitePages;