import './App.css';
import React,{Component} from 'react';
import Card from "./Card";
class App extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            cards:[
                {id:'1',name:'Upin',avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/930.jpg'},
                {id:'2',name:'Ipin',avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/488.jpg'},
                {id:'3',name:'Jarjit',avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/981.jpg'}
            ],
            showCard:true
        }
    }
    toggleShowCard = ()=> this.setState({showCard:!this.state.showCard});
    changeInputHandler = (event,id) => {
        //card yang mana yang mau diupdate
        const cardIndex = this.state.cards.findIndex(card=>card.id==id)
        //membuat copy dari cards
        const cards_copy=[...this.state.cards]
        //lalu mengubah data dari card yang sesuai
        cards_copy[cardIndex].name = event.target.value
        //update cards dengan setCards
        this.setState({cards:cards_copy})
        //setName(event.target.value)
    }
    deleteCardHandler=(cardIndex)=> {
        const cards_copy = [...this.state.cards]
        cards_copy.splice(cardIndex,1)
        this.setState({cards:cards_copy})
    }
    cardsMarkup = this.state.showCard?
        (
            //seperti for each, jadi untuk setiap card di dalam cards, akan ditampilkan datanya
            this.state.cards.map((card,index)=><Card avatar={card.avatar} name={card.name}
                                          key={card.id}
                                          onChangeInput={(event)=>this.changeInputHandler(event,card.id)}
                                                     onDelete={()=>this.deleteCardHandler(index)}
            ><div>
                <button className="w3-button w3-red">Delete</button>
            </div></Card>)
         ): null

        /*
        <Card avatar={faker.image.avatar()} name={name} onChangeName={()=>changeNameHandler('Ipin')}
                                  onChangeInput={changeInputHandler}
            >{tombol}</Card>
         */
    render() {
        return (
            <div className="App">
                <button className="w3-button w3-purple" onClick={this.toggleShowCard}>Show/Hide</button>
                {this.cardsMarkup}
            </div>
        );
    }
}

export default App;
