import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Level from '@/pages/Level'
import Result from '@/pages/Result'
import Exercice from '@/pages/Exercice'
import StoryBook from '@/pages/storybook'
import Layout from './components/layout/layout'

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
            <Level />
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
    </Routes>
  )
}

export default App
