import React from 'react'
import { Grid } from '@react-md/utils'
import { Text } from '@react-md/typography'
import { Card, CardContent, CardTitle, CardSubtitle, CardHeader} from '@react-md/card'
import './Home.css'

const HomeScreen: React.FC = () => {
    return (
        <Grid clone={true} columns={2} desktopColumns={4}>
            <Card>
                <CardHeader>
                    <CardTitle>Main Title</CardTitle>
                    <CardSubtitle>Subtitle</CardSubtitle>
                </CardHeader>
                <CardContent>
                    <Text>
                        Duis lacinia lectus sed enim placerat, non consequat arcu tincidunt.
                        Pellentesque vel condimentum lorem. Cras et arcu nibh. Cras euismod
                        lectus commodo finibus facilisis. Sed ullamcorper odio sed scelerisque
                        semper. Donec sollicitudin lorem eget tincidunt efficitur. Aenean sit
                        amet tempus lacus, sit amet semper justo. Sed quis suscipit ante.
                        Etiam aliquam risus eu laoreet placerat.
                    </Text>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default HomeScreen
