import ActivityForm from "@/components/activities/ActivityForm";
import {
  createActivity,
  updateActivity,
} from "../../actions";

export default async function EditActivityPage() {
  return (
    <ActivityForm
      categories={[]}
      initialData={{
        // your activity data
      }}
      createActivity={createActivity}
      updateActivity={updateActivity}
    />
  );
}