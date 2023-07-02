'use client'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ButtonGroup, Button } from "@mui/material";
import { useState} from 'react'
import Tiny from '@/components/Tiny'
import { MDBFile } from 'mdb-react-ui-kit';

export default function Order() {
    const top100Films = [{
        'title':'Data point 1',
    },{
        'title':'Data Point 2',
    },{
        'title':'Data Point 3',
    },{
        'title':'Data point 3',
    }]
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = useState(null);
    const [alignment, setAlignment] = useState('web');
    const [pages, setpages] = useState(0)
    const [docType, setdocType] = useState('')
    const [subjArea, setsubjArea] = useState('')
    const [academicArea, setacademicArea] = useState('')
    const [title, settitle] = useState('')
    
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      setacademicArea(event.target.innerText)
      
    };



    const handleAdd = () =>{
        setpages(pages+1)
    }
    const handleRemove = () =>{
        pages > 0 && setpages(pages-1)
    }
    let words = pages * 9;

    const handleSpacingSingle = ()=>{
        words *= 2
    }
    const handleSpacingDouble = ()=>{
        words *= 3
    }


    const handledocType = (e) =>{
        setdocType(e.target.value);
    }
    const handlesubjArea = (e) =>{
        setsubjArea(e.target.value);
    }
    const handleacademicArea = (e) =>{
        setacademicArea(e.target.value);
    }
    const handletitle = (e) =>{
        settitle(e.target.value);
    }


  return (
    <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
        <MDBCardBody>
          <MDBRow className="d-flex justify-content-center pb-7">
            <MDBCol md="7" xl="5" className="mb-4 mb-md-0">
            <MDBCard className="container-fluid ">
              <div className="py-4 d-flex flex-row">
              <Stack spacing={1} sx={{ width: 600 }}>
                    <Autocomplete  
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                        <TextField {...params} onClick={handledocType} value={docType} label="Type of Document" variant="standard" />
                        )}
                    />

                    <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                        <TextField {...params} onClick={handlesubjArea} value={academicArea} label="Subject Area" variant="standard" />
                        )}
                    />
                    <label>Academic Level</label>
                        <ToggleButtonGroup
                            color="success"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="hs">High School</ToggleButton>
                            <ToggleButton value="cl">Collage</ToggleButton>
                            <ToggleButton value="und">Under graduate</ToggleButton>
                            <ToggleButton value="mas">Masters</ToggleButton>
                            <ToggleButton value="phd">Phd</ToggleButton>

                        </ToggleButtonGroup>

                    <TextField id="standard-basic" label="Title*" value={title} onChange={handletitle} variant="standard" />
                    <label>Other instractions</label>
                    <Tiny id="standard-basic" label="Other instractions" variant="standard" />
                            
                    <MDBFile label='Order Files' size='lg' id='formFileLg' />
                    <TextField id="standard-basic" label="State" variant="standard" />
                    <TextField id="standard-basic" label="Speciality" variant="standard" />
                    <label>Paper format/Style</label>
                        <ToggleButtonGroup
                            color="success"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="hs">APA7</ToggleButton>
                            <ToggleButton value="cl">APA</ToggleButton>
                            <ToggleButton value="und">MLA</ToggleButton>
                            <ToggleButton value="mas">Turabian</ToggleButton>
                            <ToggleButton value="phd">Chicago</ToggleButton>
                            <ToggleButton value="phd">OXFORD</ToggleButton>

                        </ToggleButtonGroup>
                        
                        <label>Language Style</label>
                        <ToggleButtonGroup
                            color="success"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="EU">English US</ToggleButton>
                            <ToggleButton value="EK">English Uk</ToggleButton>

                        </ToggleButtonGroup>
                        
                        <Autocomplete
                            {...defaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                            <TextField {...params} label="Deadline / Urgency" variant="standard" />
                            )}
                        />
                        <label>No of Pages/Words</label>
                        <ButtonGroup  aria-label="primary button group">
                            <Button onClick={handleRemove} variant="contained">-</Button>
                            <Button>{pages}</Button>
                            <Button onClick={handleAdd} variant="contained">+</Button>
                        </ButtonGroup>
                        <div>{words} words</div>

                        <label>Spacing</label>
                        <ToggleButtonGroup
                            color="success"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="ss" onClick={ handleSpacingSingle }>Single Spacing</ToggleButton>
                            <ToggleButton value="ds" onClick={ handleSpacingDouble }>Double Spacing</ToggleButton>

                        </ToggleButtonGroup>

            </Stack>
              </div>            
              <hr />
              </MDBCard>

            </MDBCol>
            <MDBCol md="5" xl="4" offsetXl="1">
            <MDBCard className="container sticky-top">

              {" "}
              <div className="py-4 d-flex justify-content-start">
                <h3>
                  Summary
                </h3>
              </div>
              <div
                className="rounded d-flex flex-column p-2"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="p-2 me-3">
                  <h5>Order Recap</h5>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Title</MDBCol>
                  <div className="ms-auto">{title}</div>
                </div>
                
                <div className="p-2 d-flex">
                  <MDBCol size="8">Academic level</MDBCol>
                  <div className="ms-auto">{academicArea}</div>
                </div>

                <div className="p-2 d-flex">
                  <MDBCol size="8">Subject area</MDBCol>
                  <div className="ms-auto">{subjArea}</div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Type of paper</MDBCol>
                  <div className="ms-auto">{docType}</div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">{pages}Pages(s)</MDBCol>
                  <div className="ms-auto">+ ${pages * 4}</div>
                </div>
                <div className="border-top px-2 mx-2"></div>
               
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <MDBCol size="8">
                    <b>Total</b>
                  </MDBCol>
                  <div className="ms-auto">
                    <b className="text-success">$85.00</b>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="d-flex pb-2">
                  <div>
                    <p>
                      <b>
                        Patient Balance{" "}
                        <span className="text-success">$13.24</span>
                      </b>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <p className="text-primary">
                      <MDBIcon
                        fas
                        icon="plus-circle"
                        className="text-primary pe-1"
                      />
                      Add payment card
                    </p>
                  </div>
                </div>
                
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <MDBIcon
                        fab
                        icon="cc-visa"
                        size="lg"
                        className="text-primary pe-2"
                      />{" "}
                      Visa Debit Card
                    </p>
                    <div className="ms-auto">************3456</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <MDBIcon
                        fab
                        icon="cc-mastercard"
                        size="lg"
                        className="text-dark pe-2"
                      />{" "}
                      Mastercard Office
                    </p>
                    <div className="ms-auto">************1038</div>
                  </div>
                </div>
                <MDBBtn block size="lg">
                  Proceed to payment
                </MDBBtn>
              </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
    </MDBContainer>
  );
}