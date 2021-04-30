import React from 'react'
import './Component1.css'
import Header from './Header.js'

class Component1 extends React.Component {
    constructor(props) {
        super(props)
    
        //Array of Objects to represent each user in a todo list
        this.state = {
            userList: [
                {
                    id: 101,
                    name: 'Sanskar',
                    phonenumber: 123


                },
                {
                    id: 102,
                    name: 'Aayush',
                    phonenumber: 321

                }
            ]
             
        }
    }
    deleteHandler(userId) {
        //Created a copy of original array using the spread operator
        let list = [...this.state.userList];
        //created a variable which stores the location of whichever userId we want to delete
        let userIndex = -1;

        for(let i=0;i<list.length;i++) {
            if(list[i].id == userId) {
                userIndex = i;
                break;
            }
        }
        console.log(userIndex);
        console.log(userId);
        list.splice(userIndex,1);
        console.log(list);
        this.setState({userList:list});
    }

    addUser(e) {
        e.preventDefault();
        let list = [...this.state.userList];
        var obj = {
            name: e.target.name.value,
            phonenumber:e.target.phonenum.value
        }
        list.push(obj);
        console.log(list);


       
        this.setState({userList:list});
        

    }
    
    render() {
        return(


            <div>
           
            <Header name = 'PHONE DIRECTORY' />
            <form onSubmit={this.addUser.bind(this)} className="form1">
                <input type="text" name="name" placeholder="Enter your name" />
                <input type="number" name="phonenum" placeholder="Enter your phone number" />
                <button>Add</button>
            </form>
            <div>
                <span>Name</span>                <span>Number</span>

            </div>
            <div>
                {
                    this.state.userList.map(sub => {
                        return(
                            <div key= {sub.id}>
                            <span>
                            {sub.name}
                            </span>
                            <span>
                            {sub.phonenumber}
                            </span>
                            <button onClick={this.deleteHandler.bind(this,sub.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>


            </div>

        );
    }
}

export default Component1;