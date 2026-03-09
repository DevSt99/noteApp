import { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({ title, details })

    setTask(copyTask);

    setTitle('')
    setDetails('')
  }

 const delteNotes = (idx)=>{
    const copyTask = [...task]  
   copyTask.splice(idx,1)
   setTask(copyTask)
 }
  return (
    <div className='h-screen bg-black lg:flex text-white flex flex-col lg:flex-row'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex p-10 gap-4 lg:w-1/2 flex-col font-medium overflow-y-auto' >

        <h1 className='text-3xl font-bold '>Add Notes</h1>
        {/* FIRST INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 outline-none border-2 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILD INPUT */}
        <textarea
          className=' flex items-start flex-row px-5 w-full h-32 py-2 outline-none border-2 rounded '
          placeholder='write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className='w-full  bg-white outline-none text-black px-5 py-2 rounded
          active:scale-95'>
          Add Notes
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l p-10 w-full overflow-hidden flex flex-col'>
        <h1 className='font-bold text-3xl'>Recent Notes</h1>
        <div className='flex flex-1 flex-wrap items-start justify-start gap-5 mt-5 overflow-auto pb-5 scrollbar-hide'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex flex-col justify-between items-start h-52 w-40 sm:w-48 rounded-xl py-4 px-4 text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] overflow-hidden">
            <div className='w-full overflow-hidden' style={{maxHeight: 'calc(100% - 50px)'}}>
              <h3 className='leading-tight text-lg font-bold line-clamp-2 wrap-break-word'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sm font-semibold text-gray-400 line-clamp-5 wrap-break-word'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              delteNotes(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-amber-500 py-1 text-xs rounded font-bold text-white mt-auto'>Delete</button>
          </div>
          })}
        </div>
      </div>
    </div>
  )
}
  ``
export default App