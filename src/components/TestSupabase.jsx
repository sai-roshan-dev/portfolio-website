import { useEffect } from "react"
import { supabase } from "./supabase"

export default function TestSupabase() {
  useEffect(() => {
    async function fetchProjects() {
      let { data, error } = await supabase.from("projects").select("*")
      if (error) {
        console.error("Error fetching projects:", error)
      } else {
        console.log("Projects data:", data)
      }
    }
    fetchProjects()
  }, [])

  return <h1>Check console for Supabase data</h1>
}
