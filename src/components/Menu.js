import React, { Component } from 'react';
import { Row, Card, CardImg, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, 
	Input, Label, Form, FormGroup } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderItem ({drink}){
	return(
		<div className="col-10 col-md-5 m-1">
	        <Card>
	            <CardImg src={baseUrl+"images/"+drink.image} className ="card-img-top"/>
	            <CardBody>
	                <CardTitle>{drink.name}</CardTitle>
	            </CardBody>
	        </Card>
	    </div>
    );
}



class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addDrinkModalOpen: false,
        };  
        this.toggleAddDrinkModal = this.toggleAddDrinkModal.bind(this);   
        this.handleAddDrink = this.handleAddDrink.bind(this);  
    }

    toggleAddDrinkModal() {
      this.setState({
        addDrinkModalOpen: !this.state.addDrinkModalOpen
      });
    }

    handleAddDrink(event){
        this.toggleAddDrinkModal();
        this.props.postDrink({name: this.name.value, description: this.description.value,
                           image: this.image.value, type: this.type.value,
                           recommended: this.recommended.value});
        event.preventDefault();
    }




	render (){
		var recommended = this.props.drinks.drinks.map((drink) => {
			if (drink.recommended){
				return (
					<RenderItem drink = {drink}/>
				)
			}
            return null
		});
		var coffee = this.props.drinks.drinks.map((drink) => {
			if (drink.type === "Coffee"){
				return (
					<RenderItem drink = {drink}/>
				)
			}
            return null
		});
		var coldDrink = this.props.drinks.drinks.map((drink) => {
			if (drink.type === "ColdDrink"){
				return (
					<RenderItem drink = {drink}/>
				)
			}
            return null
		});
		var Other = this.props.drinks.drinks.map((drink) => {
			if (drink.type === "Other"){
				return (
					<RenderItem drink = {drink}/>
				)
			}
            return null
		});

        return ( 
            <>
            <div>
	            <Row className=" justify-content-center" >
	                <h5>Recommended</h5>
	            </Row>
	            <Row className="m-1 justify-content-center" >
	                {recommended}
	            </Row>
	            <Row className=" justify-content-center" >
	                <h5>Coffee</h5>
	            </Row>
	            <Row className="m-1 justify-content-center" >
	                {coffee}
	            </Row>
	            <Row className=" justify-content-center" >
	                <h5>Cold Drinks</h5>
	            </Row>
	            <Row className="m-1 justify-content-center" >
	                {coldDrink}
	            </Row>
	            <Row className=" justify-content-center" >
	                <h5>Others</h5>
	            </Row>
	            <Row className="m-1 justify-content-center" >
	                {Other}
	            </Row>
            </div>
            { (this.props.user.loggedIn && this.props.user.user.isAdmin)?
                <Button color="success" onClick={this.toggleAddDrinkModal}>
                    Add Drink
                </Button>
                : null
            }
            <Modal isOpen={this.state.addDrinkModalOpen} toggle={this.toggleAddDrinkModal}>
                <ModalHeader toggle={this.toggleAddDrinkModal}>ADD DRINK</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleAddDrink}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name"
                                innerRef={(input) => this.name = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input type="text" id="description" name="description"
                                innerRef={(input) => this.description = input}  />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="image">Image</Label>
                            <Input type="text" id="image" name="image"
                                innerRef={(input) => this.image = input}  />
                        </FormGroup>
                        <FormGroup>
                          <Label for="typeSelect">Type</Label>
                            <Input type="select" name="typeSelect" id="typeSelect" 
                                   innerRef={(input) => this.type = input}>
                              <option value ={"Coffee"}>Coffee</option>
                              <option value ={"ColdDrink"}>Cold Drink</option>
                              <option value ={"Other"}>Other</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label for="msSelect">Recommended</Label>
                            <Input type="select" name="msSelect" id="msSelect" 
                                   innerRef={(input) => this.recommended = input}>
                              <option value ={false}>NO</option>
                              <option value ={true}>YES</option>
                            </Input>
                        </FormGroup>
                        <Button type="submit" value="submit" color="success">ADD DRINK</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
  		);
		}

}

export default Menu
