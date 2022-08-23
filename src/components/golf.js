import React, {useState} from 'react'

const initialFormData = {
    year: '',
    tournament: '',
    scores: '',
    position: ''
}

const Golf = () => {
    const [results, setResults] = useState([])
    const [formData, setFormData] = useState(initialFormData)

    const setForm = (evt) => {
        const { name, value} = evt.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const addResults = (e) => {
        e.preventDefault(e)
        setResults([
            ...results,
            formData
        ])

        
    }
    

    return (
        <div className='container'>
            <div className='title'>
                <h2>Golf Results</h2>
                <p>I like to play competetive amature golf as a hobbie<br/>
                I am using this as a blog/tracker to keep track of my results</p>
                <p>Work In Progress</p>
            </div>
            <div>
                <form onSubmit={addResults}>
                    <input
                        type='number'
                        name='year'
                        onChange ={setForm}
                        value={formData.year}
                    />
                    <input
                        type='text'
                        name='tournament'
                        onChange ={setForm}
                        value={formData.tournament}
                    />
                    <input
                        type='text'
                        name='scores'
                        onChange ={setForm}
                        value={formData.scores}
                    />
                    <input
                        type='text'
                        name='position'
                        onChange ={setForm}
                        value={formData.position}
                    />
                    <button type='submit'>Add Results</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Tournament</th>
                            <th>Scores</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!results?<p>Enter results</p>: results.map((each, key) => {
                            each['id'] = key
                            return(
                                 <tr key={key}>
                                    <td>{each.year}</td>
                                    <td>{each.tournament}</td>
                                    <td>{each.scores}</td>
                                    <td>{each.position}</td>
                                </tr>
                                )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Golf