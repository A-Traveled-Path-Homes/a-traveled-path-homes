import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { useHistory } from "react-router-dom";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";
//mui components
import { Stack, TextField, Button } from '@mui/material';

const ProperyAddressForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const propertyReducer = useSelector((store) => store.propertyReducer);
    const address = useSelector((store) => store.address);

    function handleAddressSubmit() {
        event.preventDefault();
        let addressAsString = ''
        if (address.apartment) {
          addressAsString = `${address.street} ${address.apartment} ${address.city} ${address.state} ${address.zip}`;
        } else {
          addressAsString = `${address.street} ${address.city} ${address.state} ${address.zip}`;
        }
        console.log(addressAsString);
        dispatch({type: 'SET_ADDRESS',
        payload: addressAsString
        })
        dispatch({type: 'EDIT_RESIDENCE', 
        payload: propertyReducer.residence})
        history.push('/basics');
      }

      const cancelBtn = () => {
        history.push(`/ownerdashboard`)
    }
      
    return (
      <>
        <PropertyFormNav className="address"/>
        <div className="propertyAddress">
            <form onSubmit={handleAddressSubmit}>
            <Stack alignItems='center'>
                  <h1> Address </h1>
                  <p>Your address and location are safe with us. It won't be viewable by renders until you chose to list property publicly</p>
                  <div>
                    <label> Address
                      <input 
                      type="text" 
                      value= {address.street || ''}
                      onChange = {(event) => {
                      dispatch({type: 'SET_STREET', payload: event.target.value})
                      }}
                      />
                  </label>
                  </div>
                
                <label> Apartment, suite, etc.
                  <input 
                  type="text" 
                  value= {address.apartment || ''}
                  onChange = {(event) => {
                  dispatch({type: 'SET_APARTMENT', payload: event.target.value})
                  }}
                  />
                </label>
                <label> City
                  <input 
                  type="text" 
                  value= {address.city || ''}
                  onChange = {(event) => {
                    dispatch({type: 'SET_CITY', payload: event.target.value})
                  }}
                  />
                </label>
                <label> State
                  <input 
                  type="text" 
                  value= {address.state || ''}
                  onChange = {(event) => {
                    dispatch({type: 'SET_STATE', payload: event.target.value})
                  }}
                  />
                </label>
                <label> Zip/postal code
                  <input 
                  type="text" 
                  value= {address.zip || ''}
                  onChange = {(event) => {
                    dispatch({type: 'SET_ZIP', payload: event.target.value})
                  }}
                  />
                </label>
              </Stack>
              <div className="btnContainer">
                  <div className="nextBtn">
                      <Button 
                          type="submit" 
                          size= "large"
                          sx={{
                              backgroundColor: '#CE8077',
                              color: '#f8f8f8',
                              margin: '2%',
                              paddingTop: '16px', paddingBottom: '16px',
                              paddingRight: '32px', paddingLeft: '32px'
                          }}
                        >
                              Next
                        </Button>  
                    </div>
                    <div className="cancelBtn">
                      <Button onClick={cancelBtn}
                          type="submit" 
                          size= "large"
                          sx={{
                              backgroundColor: '#CE8077',
                              color: '#f8f8f8',
                              margin: '2%',
                              paddingTop: '16px', paddingBottom: '16px',
                              paddingRight: '32px', paddingLeft: '32px'
                          }}
                          >
                              Cancel
                        </Button> 
                    </div>
                </div>
            </form>
          </div>
      </>     
    )
}

export default ProperyAddressForm;