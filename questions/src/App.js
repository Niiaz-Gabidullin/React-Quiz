import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/Quiz/QuizList/QuizList";
import Auth from "./containers/Quiz/Auth/Auth";
import QuizCreator from "./containers/Quiz/QuizCreator/QuizCreator";
import { Routes, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz-creator" element={<QuizCreator />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/" element={<QuizList />} />
        </Routes>
      </Layout>
    );
  }
}
