import React, {Component} from 'react';
import './Card.css';
export default class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="title">
                    <h4>{this.props.title}</h4>
                    {
                        this.props.manaCostSrc.map((src, i) => {
                            return <img key={'manaImg' + i} className="manaImg" src={src} alt="" />
                        })
                    }
                </div>
                <img src={this.props.imgSrc} alt="" />
                
                <div className="cardtype">
                    <p className="typeline"><b>{this.props.typeLine}</b></p>
                    <img className="expansion" src={this.props.expansion} alt="" />
                </div>

                <div className="textbox">
                    <p>{this.props.abilities}</p>
                    <p><i>{this.props.flavourText}</i></p>
                </div>
            </div>
        );
    }
}