import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Form from './Form';

const Home = ({ Auth, Warning }) => {
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
                                麗山高中自主學習表單
                            </Typography>
                        </Grid>
                        <Container>
                            {Auth !== false ? (
                                <Form />
                            ) : (
                                {
                                    ...(Warning === true ? (
                                        <Typography
                                            variant="h4"
                                            align="center"
                                            sx={{ mb: { xs: 6 } }}
                                            color="red"
                                        >
                                            請登入學校帳號
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="h4"
                                            align="center"
                                            sx={{ mb: { xs: 6 } }}
                                        >
                                            請登入學校帳號
                                        </Typography>
                                    )),
                                }
                            )}
                        </Container>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Home;
