// แบบที่ 1 ใช้ snippet :rcf
// component แบบที่แนะนำ function component
// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       แบบที่ 1
//     </div>
//   )
// }
// --------------------------------------------------------------------
// แบบที่ 2 ใช้ snippet :rcfe
// import React from 'react'

// function App() {
//   return (
//     <div>
//       แบบที่ 2
//     </div>
//   )
// }

// export default App
// --------------------------------------------------------------------
// แบบที่ 3 ใช้ snippet :rafce
// import React from 'react'

import React from 'react'
import Hi from './Hi'
import Hello from './Hello'

const App = () => {
  return (
    <div>
      แบบที่ 3
      <Hi />
      <Hello />
    </div>
  )
}

export default App



