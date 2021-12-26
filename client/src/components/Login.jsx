import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container sx={{ mt: 10 }}>
            <Card raised>
                <CardContent>
                    <Grid
                        container
                        rowGap={8}
                        display="flex"
                        flexDirection="column"
                    >
                        <Grid item xs={12}>
                            <Typography
                                variant="h2"
                                align="center"
                                sx={{ mt: { xs: 6 } }}
                            >
                                麗山高中
                            </Typography>
                        </Grid>
                        <Container>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{ mb: { xs: 6 } }}
                            >
                                請登入
                            </Typography>
                        </Container>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Home;
