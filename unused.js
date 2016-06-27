/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var Contact = React.createClass({
//    render: function() {
//        return (
//            <li className="contacts__one-contact">
//                <img className="contacts__contact-img" src={this.props.image} width="60px" height="60px" />
//                <div className="contacts__contact-rec">{this.props.name} </div>
//                <div className="contacts__contact-rec">{this.props.phoneNumber} </div>
//            </li>
//            );
//    }
//});

//var ContactList = React.createClass({
//
//    getInitialState: function () {
//        return {
//            displayedContacts: CONTACTS
//        };
//    },
//
//    searchChange: function(event) {
//        var searchQuery = event.target.value.toLowerCase();
//        var displayedContacts = CONTACTS.filter(function (el) {
//            var searchValue = el.name.toLowerCase();
//            return searchValue.indexOf(searchQuery) !== -1;
//        });
//
//        this.setState({
//            s
//        });
//    },
//
//    render: function() {
//        return (
//
//        <div className="contacts">
//            <input type="text" className="contacts__search" onChange={this.searchChange}/>
//            <ul className="contacts_list"> 
//                {
//                    this.state.displayedContacts.map(function(el) {
//                        return <Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} image={el.image}/>;
//                    })
//                }
//            </ul>
//        </div>            
//        );
//    }
//});