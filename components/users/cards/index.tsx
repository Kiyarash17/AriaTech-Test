import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  data: {
    name: string;
    email: string;
  };
};

export default function UserCard(props: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.data.name}</CardTitle>
        <CardDescription>{props.data?.email}</CardDescription>
      </CardHeader>
    </Card>
  );
}
