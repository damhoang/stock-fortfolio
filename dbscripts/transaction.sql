DROP TABLE [dbo].[Transaction];
CREATE TABLE [dbo].[Transaction] (
    [Id]            INT          IdENTITY (1, 1) NOT NULL,
    [Security]      NCHAR (50)   NULL,
    [TransType]     NCHAR (10)   NULL,
    [Qty]           INT          NULL,
    [OpenDate]      DATETIME     NULL,
    [CloseDate]     DATETIME     NULL,
    [OpenPrice]     DECIMAL (18) NULL,
    [ClosePrice]    DECIMAL (18) NULL,
    [Commission]    DECIMAL (18) NULL,
    [Cost]          DECIMAL (18) NULL,
    [Proceed]       DECIMAL (18) NULL,
    [Gain]          DECIMAL (18) NULL,
    [GainInPercent] DECIMAL (18) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);



/* SET IdENTITY_INSERT [dbo].[[Transaction]] ON */
DBCC CHECKIdENT ('[Transaction]', RESEED, 0)
GO
DELETE from [dbo].[Transaction];
INSERT INTO [dbo].[Transaction] ([Security], [TransType], [Qty], [OpenDate], [CloseDate], [OpenPrice], [ClosePrice], [Commission], [Cost], [Proceed], [Gain], [GainInPercent]) 
VALUES ('MU', 'Sell', 100, '06/02/2018', '07/04/2018', 65.50, 75.50, 10, 6560.00, 7540.00, 980.00, 15.00)