import '@/styles/App.css'
import '@/styles/end.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Level from '@/pages/level'
import Result from '@/pages/result'
import Exercice from '@/pages/exercice'
import Layout from './components/layout/layout'
import TheEnd from './pages/end'
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
