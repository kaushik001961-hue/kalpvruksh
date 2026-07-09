import ActivityForm from "@/components/activities/ActivityForm";
import {
  createActivity,
  updateActivity,
} from "../actions";

export default function NewActivityPage() {
  return (
    <div className="p-6">
      <ActivityForm
        categories={[]}
        createActivity={createActivity}
        updateActivity={updateActivity}
      />
    </div>
  );
}