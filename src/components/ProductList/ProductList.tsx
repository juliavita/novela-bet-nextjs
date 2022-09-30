import { Box, Image, Stack } from "@chakra-ui/react";

type ProductItem = {
  id: number;
  image_url: string;
};

type ProductListProps = {
  items: ProductItem[];
};

export function ProductList({ items }: ProductListProps) {
  return (
    <Stack spacing={5} direction="row">
      {items.map((item) => (
        <Box key={item.id}>
          <Image src={item.image_url} alt="" />
        </Box>
      ))}
    </Stack>
  );
}
