import '@/styles/App.css'
import '@/styles/end.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Level from '@/pages/level'
import Result from '@/pages/result'
import Exercice from '@/pages/exercise'
import Layout from './components/layout/layout'
import TheEnd from './pages/end'
import ResultCompleted from './pages/completed'
import Profile from './pages/profile'

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
            <Level user_id={0} />
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
        path="profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
