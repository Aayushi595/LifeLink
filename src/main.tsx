import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './app/routes'
import { RouterProvider } from 'react-router-dom'
import "./lib/firebase";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
