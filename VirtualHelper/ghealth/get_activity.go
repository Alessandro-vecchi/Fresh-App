package ghealth

import (
	"context"
	"fmt"
	"os"

	"golang.org/x/oauth2"
	"google.golang.org/api/fitness/v1"
	"google.golang.org/api/option"
)

// FetchActivityData retrieves activity data from Google Fit.
func FetchActivityData(accessToken string) error {
	apiKey := os.Args[1]
	ctx := context.Background()

	// Create a new Fitness service.
	svc, err := fitness.NewService(ctx, option.WithTokenSource(oauth2.StaticTokenSource(&oauth2.Token{
		AccessToken: apiKey,
	})))
	if err != nil {
		return fmt.Errorf("failed to create fitness service: %v", err)
	}

	// Set the necessary parameters for the request.
	dataSourceId := "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
	datasetId := "today-start/today-end" // Adjust these values based on the actual time range you're interested in.
	userId := "me"                       // Use "me" to indicate the authenticated user.

	// Fetch the dataset.
	dataset, err := svc.Users.DataSources.Datasets.Get(userId, dataSourceId, datasetId).Do()
	if err != nil {
		return fmt.Errorf("failed to fetch dataset: %v", err)
	}

	// Process the dataset (just printing it out here for demonstration).
	fmt.Printf("Dataset: %v\n", dataset)

	return nil
}
