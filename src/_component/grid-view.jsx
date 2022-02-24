import React, {useState} from "react";
import {connect} from "react-redux";
import Form from 'react-bootstrap/Form';
import {Table, Alert, Button} from "react-bootstrap";
import Dialog from "./dialog";
import {deleteProduct, updateProductQuantity} from "../redux/action";

function GridView(props) {
    const [{showDeleteDialog, idx}, setDeleteDialog] = useState({showDeleteDialog: false, idx: -1});

    return (
        <div className="container">
            {Array.isArray(props.data) && props.data.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        {props.columns.map((o) => (
                            <th key={o.key}>{o.label}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data &&
                    props.data.map((row, i) => {
                        return (
                            <tr key={i}>
                                {props.columns.map((o, j) => {
                                    if (o.key === 'qty') {
                                        return <td key={j}>
                                            <Form.Select value={row[o.key]}
                                                         onChange={(e) => props.updateProductQuantity({
                                                             id: row.id,
                                                             qty: e.target.value
                                                         })}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="5">4</option>
                                                <option value="5">5</option>
                                            </Form.Select>
                                        </td>
                                    }
                                    return <td key={j}>{row[o.key]}</td>
                                })}
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => setDeleteDialog({showDeleteDialog: true, idx: i})}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            ) : (
                <Alert variant={"primary"}>No Product added yet.</Alert>
            )}
            <Dialog
                title={"Delete Product"}
                buttons={[
                    {
                        onClick: () => setDeleteDialog({showDeleteDialog: false, idx: -1}),
                        variant: "secondary",
                        text: "Close",
                    },
                    {
                        onClick: () => {
                            props.deleteProduct(idx);
                            setDeleteDialog({showDeleteDialog: false, idx: -1});
                        },
                        text: "Delete",
                    },
                ]}
                modalProps={{
                    show: showDeleteDialog,
                    onHide: () => setDeleteDialog({showDeleteDialog: false, idx: -1}),
                    size: "sm",
                }}
            >
                Are you sure you want to delete the product ?
            </Dialog>
        </div>
    );
}

export default connect(null, {
    deleteProduct,
    updateProductQuantity
})(GridView);
