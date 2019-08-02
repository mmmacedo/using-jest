import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import moment from 'moment';
import { Todo } from "../components/todo/Todo";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

it("Renders correctly", () => {
  configure({ adapter: new Adapter() });
  const wrapper = shallow(
    <Todo
      id="1"
      title="Todo"
      project="Project"
      done={false}
      url="https://www.photos.com/a_photo"
      createdAt={moment()
        .subtract(1, "days")
        .format()}
      editTodo={jest.fn()}
      toggleTodo={jest.fn()}
      deleteTodo={jest.fn()}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
