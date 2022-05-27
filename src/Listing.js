import React from 'react';


class Listing extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:'monika gautam',
            class:'second',
            section:'react',
            numeric:'one'
        }
        




    }
    onClicked(e)
        {
this.setState({name:'sanshrita gautam'})
this.setState({class:'third'})
this.setState({section:'four'})
this.setState({numeric:'six'})
        }

    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.class}</h1>
            <h1>{this.state.section}</h1>
            <h1>{this.state.numeric}</h1>

            <button  onClick={(e)=>{this.onClicked(e)}}></button>
            </div>
        )
    }



}

export default Listing;
