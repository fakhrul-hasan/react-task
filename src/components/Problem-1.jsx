import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Problem1 = () => {
    const [persons, setPersons] = useState([]);
    const [show, setShow] = useState([]);

    const handleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const status = form.status.value;
        const newPerson = {name: name, status: status};
        const data = [...persons, newPerson];
        setShow(data);
        setPersons(data);
        form.reset();
    }

    const handleClick = (val) =>{
        if(val === 'all'){
            setShow(persons);
        }else{
            const query = persons.filter(person=>person.status.toLowerCase() === val);
            setShow(query);
        }
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name'/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status'/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        {
                           show.map((p, index)=><tbody key={index}>
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.status}</td>
                            </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;