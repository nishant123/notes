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
import Rfqpopup from './rfqpopup.component';
import Rfqsheet from './rfqsheet.component';
import Rfqform from './rfqform.component';


import { connect } from 'react-redux';
import { AvForm } from "availity-reactstrap-validation";
import { Nav, NavItem, NavLink, TabContent, TabPane, Modal, ModalBody, ModalFooter, ModalHeader, UncontrolledTooltip, UncontrolledCollapse } from "reactstrap";

const mapStateToProps = (state, ownProps) =>
{
    return {
    };
};

function Rfq(props)
{
    const [countries, setCountries] = useState([{ label: "UAE", value: 1, Selected: true }, { label: "Qatar", value: 2 }]);
    const [Cascading, setCascading] = useState("Methodology");
    const [selectedCountry, setSelectedCountry] = useState(1);
    const [modelTempData, setModelTempData] = useState({});

    const [methodologies, setMethodology] = useState([{ label: "Meth1", value: 1, Selected: true }, { label: "Meth2", value: 2 }]);

    const [selectedMethodology, setSelectedMethodology] = useState(1);
    //declared an array for submethodology
    const submethodologiesarr = [{ label: "subMeth1", value: 1, Selected: true, methdologyid: 1 }, { label: "subMeth2", value: 2, methdologyid: 1 }, { label: "subMeth3", value: 3, Selected: true, methdologyid: 2 }, { label: "subMeth4", value: 4, methdologyid: 2 }];
    const [submethodologies, setsubMethodology] = useState(submethodologiesarr);

    const [selectedsubMethodology, setSelectedsubMethodology] = useState(1);
    const [market, setmarket] = useState([{ label: "market1", value: 1, Selected: true }, { label: "market2", value: 2 }]);
    const [modalVisible, setModalVisible] = useState(0);
    const [selectedmarket, setSelectedmarket] = useState(1);
   
    function callpopup()
    {
        setModalVisible(1);
    }
    const getData = (rowData) =>
    {

        // This is the row data from ChildComponent
        console.log(rowData);
    }
    const rfqFormTemplate = (
        <Container fluid className="p-0">
                <AvForm encType="multipart/form-data"  onValidSubmit={(e) =>
                {
                    e.preventDefault();
                    let formData = new FormData();
            }}>
                <Row form>
                    <Col md={4}>
                        
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <AvField
                            name="clientdetails"
                            label="Client Details"
                            placeholder=""
                            type="text"
                        />

                    </Col>
                    <Col md={4}>
                        <AvField
                            name="contactdetails"
                            label="Contact Details"
                            placeholder=""
                            type="text" 
                        />
                       
                    </Col>
                    <Col md={4}>
                        <AvField
                            name="marketdetails"
                            label="Market Details"
                            placeholder=""
                            type="text"
                        />

                    </Col>
                        {props.error && <Col md={{ size: 4, offset: 4 }}><UncontrolledAlert className="alert-toast" color="danger">
                            <div className="alert-message">
                                <strong>{props.error}</strong>
                            </div>
                        </UncontrolledAlert></Col>}
                </Row>
                <Row>
                    <Col md={4}>
                        
                        <AvField
                            name="methodology"
                            label="Enter Methodology"
                            type="select"
                            disabled={props.disabled}
                            value={countries.filter(x => x.value == selectedCountry)[0]}
                            onChange={(e) => onRfqInfoSelectChange("Methodology", e.target.value)}
                            errorMessage="Methodology Details is required"
                            validate={{ required: { value: true } }}
                            required
                        >
                            {methodologies.map((methodology) =>
                                <option key={methodology.value} value={methodology.value}>{methodology.label}</option>
                            )};
                            </AvField>

                    
                    </Col>
                    <Col md={4}>

                        <AvField
                            name="submethodology"
                            label="Enter Sub Methodology"
                            type="select"
                            disabled={props.disabled}
                            value={countries.filter(x => x.value == selectedCountry)[0]}
                            errorMessage="SubMethodology Details is required"
                            validate={{ required: { value: true } }}
                            required

                        >
                            {submethodologies.map((submethodology) =>
                                <option key={submethodology.value} value={submethodology.value}>{submethodology.label}</option>
                            )};



                            </AvField>
                        
                    </Col>
                </Row>
                <Row>
                 
                    <Col md={4}>
                        <AvField
                            name="markets"
                            label="Enter Markets"
                            type="select"
                            disabled={props.disabled}
                            value={countries.filter(x => x.value == selectedCountry)[0]}
                            errorMessage="Markets Details is required"
                            validate={{ required: { value: true } }}
                            required
                        >
                            {market.map((market) =>
                                <option key={market.value} value={market.value}>{market.label}</option>
                            )};
                        </AvField>
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
                                    <Button color="primary" >Cancel</Button>
                                </FormGroup>
                            </Col>
                        }
                </Row>
            </AvForm>
            <Button onClick={() => setModalVisible(1)}>call popup </Button>
            {modalVisible === 1 && < Rfqpopup popupvar={1} />}
            <Rfqsheet />
          
        </Container>
    );
    // Hook
    //function usePrevious(value)
    //{
    //    // The ref object is a generic container whose current property is mutable ...
    //    // ... and can hold any value, similar to an instance property on a class
    //    const ref = useRef();

    //    // Store current value in ref
    //    useEffect(() =>
    //    {
    //        ref.current = value;
    //    }, [value]); // Only re-run if value changes

    //    // Return previous value (happens before update in useEffect above)
    //    return ref.current;
    //}
    function onRfqInfoSelectChange(name, value)
    {
        //value = !isArray(value) ? parseInt(value) : value;
        let newChildValue = [];
        let child = "demo";


        if (Cascading === name)
        {
            const abcd = submethodologiesarr.map((x) =>
            {
                if (x.methdologyid == value) {
                    newChildValue.push(x);
                    console.log('x ' + x);
                }
            }
            );
        }
        setsubMethodology(newChildValue);
        return newChildValue;
    }
    return rfqFormTemplate;
};

export default connect(mapStateToProps, null)(Rfq);