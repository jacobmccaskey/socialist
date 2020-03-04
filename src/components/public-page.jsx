import React, { Component } from 'react';
import Generator from './fakeBioGenerator';


class PublicPage extends Component {
    state = { 
        contacts: []
     }

     componentDidMount() {
         this.fetchData();
     }

     componentWillUnmount() {
         this.setState({
             contacts: []
         })
     }


    fetchData() {

        this.setState({
            contacts: []
        })
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
        {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        address: `${user.location.state}, ${user.location.city}`,
        email: `${user.email}`,
        pictureUrl: `${user.picture.large}`
        }
    )) )
    .then(contacts => this.setState({
        contacts,
    }))
    .catch(error => console.log('parsing failed', error))
    }
    
    render() { 
        const { contacts } = this.state;
        return (
            <div>
                <h2>News Feed</h2>
            
            { contacts.map(contact => {
                const {username, pictureUrl} = contact;
                return (
                    <div className="contact-card" key={username}>
                    
                        <table>
                        <tr>{username}</tr>
                            <tr><Generator /></tr>
                        </table>

                        <div className="photo"> 
                        <img  src= {pictureUrl} alt= {pictureUrl} />
                        </div>
                    
                    </div>
                )
            })}
            </div>
          );
    }
}
 
export default PublicPage;