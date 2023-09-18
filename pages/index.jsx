'use client';
import Date from '@/components/Date';
import Button from '@/components/Ui/Button/Button';
import Input from '@/components/Ui/Input/Input';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdatedTrash, completedTasks, updateTasks } from '@/store/TodoReducer';
import { MdAdd, MdOutlineEdit, MdDelete } from 'react-icons/md';
function Index() {
  const tasksData = useSelector((state) => state.todoReducer.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);
  const fetchTodo = async () => {
    try {
      const data = await fetch('/api/route/route');

      const res = await data.json();
      const resData = res.result;
      const totaltodo = [];
      for (const key in resData) {
        totaltodo.push({
          id: resData[key]._id,
          task: resData[key].task,
          description: resData[key].description,
        });
      }
      dispatch(updateTasks(totaltodo));
    } catch (err) {
      console.log('Tis IS error', err);
    }
  };

  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const addTaskHandler = () => {
    setOpen(!open);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const data = { task, description, isCompleted: false };
    try {
      const todoPost = await fetch('/api/route/route', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
    setTask('');
    setDescription('');
  };
  useEffect(() => {
    fetchTodo();
  }, [submitHandler]);
  const deleteHandler = async (id) => {
    console.log(id);
    const data = await fetch(`/api/route/${id}`, {
      method: 'DELETE',
    });
  };
  // dispatch(UpdatedTrash(id));
  // const editHandler = (id) => {
  //   const editdTask = taskData.find(
  //     (tasks) => taskData[id].task === tasks.task,
  //   );
  //   setEditvalues(editdTask);
  // };

  const taskCompleteHandler = async (id) => {
    console.log(id);
    const data = await fetch(`/api/route/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCompleted: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await data.json();
    // dispatch(completedTasks(id));
  };
  return (
    <React.Fragment>
      <div className=" mx-auto mt-12 h-screen w-4/5  sm:w-4/5 ">
        <Date />

        <ul className="mt-2">
          {tasksData &&
            tasksData.map((item) => (
              <li
                key={item.id}
                className="mb-3 flex  justify-between rounded-lg border  border-pink-300/30 py-3 ps-4 shadow hover:py-4 hover:shadow-xl"
              >
                <div className="flex items-center">
                  <Input
                    onChange={() => taskCompleteHandler(item.id)}
                    id="link-checkbox"
                    type="checkbox"
                    className="h-[17px] w-[17px] appearance-none rounded-full border-2 border-slate-950/50 bg-white transition-all duration-300 ease-in-out checked:border-green-600 checked:bg-green-500 focus:ring-2 focus:ring-green-600"
                  />

                  <p className="text-md ms-2">{item.task}</p>
                </div>
                <div className="me-8 flex">
                  <Button
                    onClick={() => editHandler(item.id)}
                    className="rounded-md bg-green-600/80 px-1 hover:rounded-full hover:bg-green-600  hover:text-white"
                  >
                    <MdOutlineEdit />
                  </Button>
                  <Button
                    onClick={() => deleteHandler(item.id)}
                    className="me-4 ms-3  rounded-md border bg-red-600/80 px-1  hover:rounded-full hover:bg-red-500  hover:text-white "
                  >
                    <MdDelete />
                  </Button>
                </div>
              </li>
            ))}
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
              className=" w-full  ps-2 text-sm font-normal  focus:outline-none"
            />
            <Input
              type="text"
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
