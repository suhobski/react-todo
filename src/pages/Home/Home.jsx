import React from "react";
import { HomeContainer, HomeSecondTitle, HomeTitle } from "./Home.styles";

const Main = () => {
  return (
    <HomeContainer>
      <HomeTitle>Тестовое задание React</HomeTitle>
      <p>
        Нужно разработать приложение со списком todo в формате Single Page
        Application.
      </p>
      <HomeSecondTitle>Требования к приложению.</HomeSecondTitle>
      <ol>
        <li>Приложение должно содержать 2 страницы: главная и список todo</li>
        <li>Переход между страницами должен быть реализован через navbar</li>
        <li>
          На главной странице должно быть лого и краткое описание страницы
        </li>
        <li>На странице для списка todo должен быть интерактивный список</li>
        <li>
          Данные для списка должны быть запрошены с
          <code>
            https://jsonplaceholder.
            <wbr />
            typicode.com/todos
          </code>
        </li>
        <li>
          Должна быть реализована возможность добавления/изменения/удаления todo
        </li>
        <li>Должна быть реализована пагинация без перезагрузки страницы</li>
      </ol>
    </HomeContainer>
  );
};

export default Main;
