import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Analytics = MatxLoadable({
  loader: () => import("./Analytics")
})

const dashboardRoutes = [
  {
    path: "/dashboard/",
    component: Analytics,
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
