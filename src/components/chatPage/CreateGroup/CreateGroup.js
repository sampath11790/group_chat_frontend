import React from "react";
import cls from "./CreateGroup.module.css";
const CreateGroup = () => {
  return (
    <div className={cls.main_page_container}>
      <h2>
        Building Bridges, One Chat at a Time: Welcome to our Group Chat
        Community
      </h2>
      <div className={cls.main_container}>
        <div className={cls.img_container}>
          <img
            src="https://www.ndcs.com.sg/sites/shcommonassets/Assets/Events/NCCS/Public%20Events/psp%20event.jpg"
            alt="just image"
          ></img>
        </div>
        <div className={cls.input_container}>
          <form>
            <h3>Creat Group</h3>
            <span>some text some text some textsome text</span>
            <input type="text"></input>
            {/* <span>some text</span> */}
            <button> Create group</button>
          </form>
          <div>
            <p>
              <span>group1</span> <button>join</button>
            </p>
            <p>
              <span>group2</span> <button>join</button>
            </p>
            <p>
              <span>group3</span> <button>join</button>
            </p>
          </div>
        </div>
      </div>
      <span>
        captures the essence of bringing people together, fostering connection,
        and facilitating meaningful conversations within a group chat
        environment
      </span>
    </div>
  );
};

export default CreateGroup;
