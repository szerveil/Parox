import { Button } from "./components/ui/button.jsx"
import { Download, Github, Shield, Code, BetweenHorizontalEnd, MoveUp } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 relative">
      {/* Animated Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-cyan/30 to-slate-900/90 pointer-events-none vignette-fade z-0" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent pointer-events-none vignette-fade z-0" />


      {/* Simplified Header */}
      <header className="before:backdrop-blurrelative backdrop-brightness-75 px-6 h-16 flex items-center justify-between md:sticky md:top-0">
        <div className="flex items-center">
          <img src="./icon.png" alt="Parox Logo" className="h-12 w-12 rounded-full" />
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        {/* Minimal Hero */}
        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Parox
              </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Compact DLL Injection Application for Windows
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col items-center gap-1">
              <a href="https://github.com/szerveil/ParoxInjector/releases/download/net8-release/Parox-x64.zip">
                <Button size="lg" className="cursor-pointer px-8 py-3">
                  <Download className="mr-2 h-5 w-5" />Download
                </Button>
              </a>
              
              <p className="text-slate-400 text-sm">Version: 1.0.0</p>

              <div className="flex items-center text-sm justify-center text-slate-400">
                <div className="flex items-center gap-1">
                  <a href="https://github.com/szerveil/ParoxInjector"><Github className="cursor-pointer hover:sepia active:text-amber-800 h-5 w-5 ml-2 "/></a>
                  <a href="https://discord.gg/DfPdxtPxcQ"><img src="/discord.svg" className="cursor-pointer hover:brightness-[.75] active:brightness-[.5] w-5 ml-2"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto">
              <MoveUp className="h-6 w-6 text-cyan-200" />
            </div>
            <h3 className="text-lg font-semibold text-white">Open Source</h3>
            <p className="text-slate-400 text-sm">You can view the Source Code on Github using the Github Button above.</p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto">
              <Code className="h-6 w-6 text-cyan-200" />
            </div>
            <h3 className="text-lg font-semibold text-white">.NET Runtime</h3>
            <p className="text-slate-400 text-sm">Made in C#</p>
          </div>

          <div className="text-center justify-center space-y-2 text-nowrap">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto">
              <BetweenHorizontalEnd className="h-6 w-6 text-cyan-200" />
            </div>
            <h3 className="text-lg font-semibold text-white">Community-Managed Filter</h3>
            <p className="text-slate-400 text-sm">Sponsored by The Community.<br/>Exists to Prevent users from App misuse<br/><b>[</b>  Updated Automatically and Stored Internally  <b>]</b></p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 text-center py-6 text-slate-500 text-sm">
        © 2025 Parox.
      </footer>
    </div>
  )
}
