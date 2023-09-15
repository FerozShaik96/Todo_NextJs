import Date from '@/components/Date';
import Button from '@/components/Ui/Button/Button';
import Input from '@/components/Ui/Input/Input';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTasks, UpdatedTrash, completedTasks } from '@/store/TodoReducer';
import { MdAdd, MdOutlineEdit, MdDelete } from 'react-icons/md';
function Index() {
  const tasksData = useSelector((state) => state.todoReducer.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  // const [taskData, settaskData] = useState([]);
  const [open, setOpen] = useState(false);
  // const [editValues, setEditvalues] = useState({});
  // const [completedTask, setCompletedTask] = useState([]);
  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const addTaskHandler = () => {
    setOpen(!open);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // settaskData((prev) => {
    //   return [...prev, { task, description }];
    // });
    const data = [{ task, description }];

    dispatch(updateTasks(data));

    setTask('');
    setDescription('');
  };
  // const deleteHandler = (id) => {
  //   const data = taskData.filter((tasks) => taskData[id].task != tasks.task);
  //   settaskData(data);
  // };
  // const editHandler = (id) => {
  //   const editdTask = taskData.find(
  //     (tasks) => taskData[id].task === tasks.task,
  //   );
  //   setEditvalues(editdTask);
  // };

  // const taskCompleteHandler = (id) => {
  //   const remainingTask = taskData.filter(
  //     (tasks) => taskData[id].task != tasks.task,
  //   );
  //   const completedtask = taskData.find(
  //     (tasks) => taskData[id].task === tasks.task,
  //   );
  //   settaskData(remainingTask);
  //   setCompletedTask((prev) => {
  //     return [...prev, completedtask];
  //   });
  // };
  return (
    <React.Fragment>
      <div className=" mx-auto mt-12 h-screen w-4/5  sm:w-4/5 ">
        <Date />
        <ul className="mt-2">
          {/* {taskData &&
            taskData.map((itme, index) => (
              <li
                key={index + 1}
                className="mb-3 flex  justify-between rounded-lg border  border-pink-300/30 py-3 ps-4 shadow hover:py-4 hover:shadow-xl"
              >
                <div className="flex items-center">
                  <Input
                    onChange={() => taskCompleteHandler(index)}
                    id="link-checkbox"
                    type="checkbox"
                    className="h-[17px] w-[17px] appearance-none rounded-full border-2 border-slate-950/50 bg-white transition-all duration-300 ease-in-out checked:border-green-600 checked:bg-green-500 focus:ring-2 focus:ring-green-600"
                  />

                  <p className="text-md ms-2">{itme.task}</p>
                </div>
                <div className="me-8 flex">
                  <Button
                    onClick={() => editHandler(index)}
                    className="rounded-md bg-green-600/80 px-1 hover:rounded-full hover:bg-green-600  hover:text-white"
                  >
                    <MdOutlineEdit />
                  </Button>
                  <Button
                    onClick={() => deleteHandler(index)}
                    className="me-4 ms-3  rounded-md border bg-red-600/80 px-1  hover:rounded-full hover:bg-red-500  hover:text-white "
                  >
                    <MdDelete />
                  </Button>
                </div>
              </li>
            ))} */}
        </ul>
        {!open ? (
          <Button
            onClick={addTaskHandler}
            className="mt-4 flex w-full items-center gap-x-2 p-1  "
          >
            <MdAdd className=" rounded-full text-lg text-red-500 hover:bg-red-500 hover:text-white" />
            <span className=" text-sm hover:text-red-500">Add Task</span>
          </Button>
        ) : (
          <form onSubmit={submitHandler} className="mt-4 rounded-lg border p-2">
            <Input
              onChange={taskHandler}
              type="text"
              placeholder="Task name"
              value={task}
              // defaultValue={editValues ? editValues.task : ''}
              className=" w-full  ps-2 text-sm font-normal  focus:outline-none"
            />
            <Input
              type="text"
              // defaultValue={editValues ? editValues.description : ''}
              onChange={descriptionHandler}
              placeholder="Description"
              value={description}
              className=" w-full  ps-2 text-xs font-normal focus:outline-none"
            />

            <div className=" flex  justify-end gap-x-2">
              <Button
                onClick={addTaskHandler}
                className="outline:none rounded-lg bg-zinc-200/40 px-3 py-1 hover:bg-zinc-300/50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-lg bg-red-600/80 px-3 py-1 text-white outline-none"
              >
                Add Task
              </Button>
            </div>
          </form>
        )}
      </div>
    </React.Fragment>
  );
}

export default Index;
