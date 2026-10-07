import { Route, Routes, BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import LayoutSec from "../src/pages/UserApp/components/Layout/LayoutSec";

// Pages
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";

// Lessons
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_07_Practise from "lessons/Lesson_07_Practice/Lesson_07_Practise";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_13 from "lessons/Lesson_13/Lesson_13";
// Homeworks
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_10 from "homeworks/Homework_10/Homework_10";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Facebook from "pages/EmployeeApp/Clients/Facebook";
import Google from "pages/EmployeeApp/Clients/Google";
import Apple from "pages/EmployeeApp/Clients/Apple";
import { ROUTES } from "constants/routes";
import Homework_13 from "homeworks/Homework_13/Homework_13";
import { Children } from "react";
import CreateEmployees from "pages/UserApp/components/CreateEmp/CreateEmployees";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson_13> */}
        {/* <Routes> don't forgot LAYOUT
          <Route path={ROUTES.HOME} element={<Home />}  />
          <Route path={ROUTES.ABOUT}  element={<About />} />
          <Route path={ROUTES.LOGIN}  element={<LogIn />} />
          <Route path={ROUTES.CONTACT_US}  element={<ContactUs />} />
          <Route path={ROUTES.NOT_FOUND}  element="Page is not found!!!" />
          <Route path={ROUTES.CLIENTS}  element={<Clients />} />
          <Route path={ROUTES.FACEBOOK}  element={<Facebook />} />
          <Route path={ROUTES.GOOGLE}  element={<Google />} />
          <Route path={ROUTES.APPLE}  element={<Apple />} />

        </Routes> */}
        {/* <Home /> */}
      {/* </Lesson_13> */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_07_Practice /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Homework_10 /> */}
       {/* <Homework_13 /> */}
        <LayoutSec>
          <Routes>
            <Route path="/CreateEmployees" element={<CreateEmployees />}  />
            {/* <Route path="/Employee" element={<Employee />}  /> */}
        </Routes>
        </LayoutSec>
       

    </BrowserRouter>
  );
}

export default App;
