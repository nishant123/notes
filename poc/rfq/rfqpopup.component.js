import React, { useState, useEffect } from 'react';
import
{
    Button,
    Col,
    Container,
    FormGroup,   
    Row,
    Label,
    Table,
    UncontrolledAlert
} from "reactstrap";
import
{
    AvField
} from "availity-reactstrap-validation";

import { connect } from 'react-redux';
import { AvForm } from "availity-reactstrap-validation";
import { Nav, NavItem, NavLink, TabContent, TabPane, Modal, ModalBody, ModalFooter, ModalHeader, UncontrolledTooltip, UncontrolledCollapse } from "reactstrap";

const mapStateToProps = (state, ownProps) =>
{
    return {
    };
};

function Rfqpopup(props)
{
    const countrysarr = [{ label: "UAE", value: 1, Selected: true }, { label: "Qatar", value: 2 }];
    const [countries, setCountries] = useState(countrysarr);
    const [Cascading, setCascading] = useState("Country");
    const [selectedCountry, setSelectedCountry] = useState(1);
    const [modelTempData, setModelTempData] = useState({});
    const methodologyarr = [{ label: "Meth1", value: 1, Selected: true, countryid: 1 }, { label: "Meth2", value: 2, countryid: 2 }];
    const [methodologies, setMethodology] = useState(methodologyarr);

    const [selectedMethodology, setSelectedMethodology] = useState(1);
    //declared an array for submethodology
    const [modalVisible, setModalVisible] = useState(1);
    const [openvar, setOpenvar] = useState('isnoOpen');
    const [selectedmarket, setSelectedmarket] = useState(1);


    useEffect(() =>
    {
        debugger;
        if (props.popupvar>0)
            callPopupactive();
        
    }, []);
    function callPopupinactive()
    {
        setModalVisible(0);
    }
    function callPopupactive()
    {
        setModalVisible(1);
    }

    const rfqFormTemplate = (<Row>
        {modalVisible > 0 &&
                <Modal isOpen visible="1" centered size="xl">
                    <ModalBody className="m-3">
                        <Row form>
                            <Col md={8}>
                                <AvForm>
                                    <Col md={8}>
                                        <AvField
                                            name="countries"
                                            label="Enter Country"
                                            type="select"
                                            disabled={props.disabled}
                                            value={countries.filter(x => x.value == selectedCountry)[0]}
                                            onChange={(e) => onRfqInfoSelectChange("Country", e.target.value)}
                                            errorMessage="Country Details is required"
                                            validate={{ required: { value: true } }}
                                            required
                                        >
                                            {countries.map((country) =>
                                                <option key={country.value} value={country.value}>{country.label}</option>
                                            )};
                            </AvField>
                                    </Col>

                                    <Col md={8}>
                                        <AvField
                                            name="methodology"
                                            label="Enter Methodology"
                                            type="select"
                                            disabled={props.disabled}
                                            validate={{ required: { value: true } }}
                                            required
                                        >
                                            {methodologies.map((methodology) =>
                                                <option key={methodology.value} value={methodology.value}>{methodology.label}</option>
                                            )};
                            </AvField>
                                    </Col>

                                </AvForm>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <FormGroup>
                                    <Button color="primary" type="submit" disabled={props.isResourceLoading || props.isStaticDataLoading}>Submit</Button>
                                </FormGroup>
                            </Col>
                            {!props.approveReject &&
                                <Col className='ml-1' md={1}>
                                    <FormGroup>
                            <Button color="primary" onClick={() => setModalVisible(0)}>Cancel</Button>
                                    </FormGroup>
                                </Col>
                            }
                        </Row>
                        {modelTempData.AddVendors && modelTempData.AddVendors.length > 0 &&
                            <>
                                <Table hover bordered style={{ backgroundColor: "#FFFFFF" }} condensed className="ewn">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Vendor Name</th>
                                            <th>Sample</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {modelTempData.AddVendors.map((vendor, indexVendor) =>
                                            (
                                                <tr key={indexVendor}>
                                                    <td>
                                                        {indexVendor + 1}
                                                    </td>
                                                    <td>
                                                        {vendor.label}
                                                    </td>

                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </>
                        }
                    </ModalBody>
                    <ModalFooter>


                    </ModalFooter>
                </Modal>}</Row>
    );
    function onRfqInfoSelectChange(name, value)
    {
        
        //value = !isArray(value) ? parseInt(value) : value;
        let newChildValue = [];
        debugger;
        if (Cascading === name)
        {
            const abcd = methodologyarr.map((x) =>
            {
                if (x.countryid == value)
                {
                    newChildValue.push(x);
                }
            }
            );
        }
        setMethodology(newChildValue);
        return newChildValue;
    }
      
    return rfqFormTemplate;
};

export default connect(mapStateToProps, null)(Rfqpopup);