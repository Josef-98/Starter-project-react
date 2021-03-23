import React, { Component } from 'react'
import Globaldesign from '../components/globaldesign'
import Categorie from '../components/categorie'
import CategorieModel from '../models/categorie-model'
export default class ManagerCategoriesPage extends Component {
    constructor(){
        super()
        this.state={
            nom:"",
            description:"",
            list_categories:[]

        }
    }
    render() {
        return (
<Globaldesign>

    <Categorie
     handlechange={this.change}
     handleadd={this.add}
    >
   
    </Categorie>
</Globaldesign>

        )
    }
    change=(event)=>{
        let name=event.target.name;
        let value=event.target.value
        console.log(name,value)
        this.setState({[name]:value})
    
    }
    add=(event)=>{
        let ncategorie=new CategorieModel(
            this.state.nom,
            this.state.description
        )
        let newlist=this.state.list_categories
        newlist.push(ncategorie)
        this.setState({list_categories:newlist})
        console.log(newlist)
        //appel a la fonction put de axios
    // axios
    // .put("students/" + this.state.updatedStudent_id + ".json", student_data)
    // .then((response) =>
    }
}

