import './App.css'
import './end.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Level from '@/pages/Level'
import Result from '@/pages/Result'
import Exercice from '@/pages/Exercice'
import StoryBook from '@/pages/storybook'
import Layout from './components/layout/layout'
import TheEnd from './pages/End'
import ResultCompleted from './pages/completed'
import CardLearning from './components/card-learning'

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="level"
        element={
          <Layout>
            <Level userId={0} />
          </Layout>
        }
      />
      <Route
        path="exercice/:levelId/:questionId"
        element={
          <Layout>
            <Exercice />
          </Layout>
        }
      />
      <Route
        path="exercice"
        element={
          <Layout>
            <Exercice />
          </Layout>
        }
      />
      <Route
        path="result"
        element={
          <Layout>
            <Result />
          </Layout>
        }
      />
      <Route
        path="storybook"
        element={
          <Layout>
            <StoryBook />
          </Layout>
        }
      />
      <Route
        path="completed"
        element={
          <Layout>
            <ResultCompleted />
          </Layout>
        }
      />
      <Route
        path="end"
        element={
          <Layout>
            <TheEnd />
          </Layout>
        }
      />
      <Route
        path="card-learning"
        element={
          <Layout>
            <CardLearning />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
