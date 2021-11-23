import { Button } from "@chakra-ui/react"

function pChart() {

    
    
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const config = {
        type: 'pie',
        data: data,
      };
    
    return(
 <Button right={4} bottom={4} position="relative" colorScheme="blue" textAlign="center">hello  </Button>
)};

export default pChart